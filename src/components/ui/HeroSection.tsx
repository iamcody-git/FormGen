import React from "react";
import GenerateFormInput from "./GenerateFormInput";
import { Button } from "./button";

type SuggestionText ={
  label:string;
  text:string
}

const suggestionBtnText:SuggestionText[] = [
  {
    label:"Job Application",
    text:"Develop a basic job application form that serve as a one-page solution form collection importatnt points required"
  },
  {
  label:"Registeration form",
    text:"Create a course registeration form suitable form any school or instituation"
  },
  {
    label:"Feedback form",
      text:"Create a client feedback form to gather valuable insights from any clients"
    },


]

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-50 pointer-events-none"></div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl font-bold text-white">
          Build AI-driven forms using Open AI
        </h1>
        <p className="mt-4 text-lg text-white">
          Leverage the power of AI to create a form in minutes
        </p>
      </div>

      {/* Generate Form Input */}
      <div className="mt-8 relative z-10 w-full px-4 max-w-lg">
        <GenerateFormInput />

<div className="grid grid-cols-3 gap-1 p-2">
        {
          suggestionBtnText.map((ClipboardItem:SuggestionText,index:number)=>(
            <Button className="rounded-full h-10 text-center " variant={'outline'} >{ClipboardItem.label}</Button>
          ))
        }
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
