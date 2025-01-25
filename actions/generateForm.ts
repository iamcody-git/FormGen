"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export const generateForm = async (prevState: unknown, formData: FormData) => {
    try {
        const user = await currentUser();
        if (!user) {
            return { success: false, message: "User not found" };
        }

        if (!process.env.OPENAI_API_KEY) {
            return { success: false, message: "OpenAI API key not found" };
        }

        // Define schema for validation
        const schema = z.object({
            description: z.string().min(1, "Description is required"),
        });

        const result = schema.safeParse({
            description: formData.get("description") as string,
        });

        if (!result.success) {
            return {
                success: false,
                message: "Invalid form data",
                error: result.error.errors,
            };
        }

        const description = result.data.description;

        // Define the OpenAI prompt
        const prompt = `Create a JSON form with the following fields: title, fields (If any field includes options, keep it inside an array, not an object), button. Description: ${description}`;

        // Request OpenAI to generate the form content
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }],
        });

        const formContent = completion.choices[0]?.message?.content;

        if (!formContent) {
            return { success: false, message: "Failed to generate form content" };
        }

        let formJsonData;
        try {
            formJsonData = JSON.parse(formContent);
        } catch (error) {
            console.error("Error parsing JSON", error);
            return { success: false, message: "Generated form content is not valid JSON" };
        }

        // Save the generated form to the database
        const savedForm = await prisma.form.create({
            data: {
                ownerId: user.id,
                content: formJsonData ? formJsonData : null,
            },
        });

        return {
            success: true,
            message: "Form generated successfully",
            data: savedForm,
        };
    } catch (error) {
        console.error("Error generating form:", error);
        return { success: false, message: "An error occurred while generating the form" };
    }
};
