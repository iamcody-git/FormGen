import React from "react";
import HeroSection from "@/components/ui/HeroSection";
import Layout from "./Layout";
import PricingPage from "@/components/ui/PricingPage";
import Footer from "@/components/ui/Footer";


const Homepage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <HeroSection />
      <PricingPage />
      <Footer />
      {children}
    </Layout>
  );
};

export default Homepage;