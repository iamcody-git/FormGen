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
    <section className="relative m-10 flex flex-col items-center justify-center bg-white">
  {/* Content Wrapper with Background */}
  <div className="relative bg-gradient-to-r from-blue-500 to-purple-300 rounded-lg p-8 shadow-lg text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
      Build AI-driven forms using Open AI
    </h1>
    <p className="mt-4 text-lg md:text-xl text-white max-w-2xl mx-auto">
      Leverage the power of AI to create a form in minutes
    </p>

    {/* Generate Form Input */}
    <div className="mt-8 w-full max-w-md mx-auto">
      <GenerateFormInput />
      <div className="grid grid-cols-3 gap-2 p-2 mt-4">
        {suggestionBtnText.map((ClipboardItem: SuggestionText, index: number) => (
          <Button
            key={index}
            className="rounded-full h-10 text-center text-sm font-medium"
            variant={"outline"}
          >
            {ClipboardItem.label}
          </Button>
        ))}
      </div>
    </div>
  </div>
</section>


  );
};

export default HeroSection;
