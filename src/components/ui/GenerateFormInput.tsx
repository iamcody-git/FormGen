import React from "react";
import { Input } from "./input";
import { Button } from "./button";

const GenerateFormInput = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <Input
        type="text"
        placeholder="Write a prompt to generate form ..."
        className="w-full"
      />
      <Button className="w-full sm:w-auto">Generate form</Button>
    </div>
  );
};

export default GenerateFormInput;
