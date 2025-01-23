import React from "react";
import HeroSection from "@/components/ui/HeroSection";
import Layout from "./Layout";


const Homepage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <HeroSection />
      {children}
    </Layout>
  );
};

export default Homepage;