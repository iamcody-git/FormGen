import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="border-b-2 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Logo />
          <div className="flex items-center">
            <Button variant={"link"}>Dashboard</Button>
            <UserButton />
          </div>
        </div>
      </nav>
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;