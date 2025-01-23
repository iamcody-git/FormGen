import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
    </section>
  );
};

export default HeroSection;
