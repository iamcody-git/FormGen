import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { PricingPlan, pricingPlan } from "@/lib/pricePlan";
import { Badge } from "./badge";

const PricingPage = () => {
  return (
    <>
    <div className="text-center mb-10 text-3xl">
    <h1 className="font-bold">Plan and Pricing</h1>
    <p className="text-gray-500 text-sm">Recieve unlimited credit on early pay😁</p>
  </div>
    <div className="flex items-center justify-center  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {pricingPlan.map((plan: PricingPlan, index: number) => (
          <Card key={index} className= {`${plan.level === "Enterprice" && "bg-[#1c1c1c] text-gray-200 "}w-[350px] flex flex-col justify-between`}>
            <CardHeader className="justify-center items-center">
              <CardTitle>{plan.level}</CardTitle>
              {plan.level === "Pro" && (
                <Badge className="rounded-full bg-orange-400 hover:bg-null">
                  Popular🔥
                </Badge>
              )}
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-2xl font-bold">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.services.map((item: string, index: number) => (
                  <li className="flex items-center" key={index}>
                    <span className="text-green-500">✅</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className={`${plan.level === "Enterprice" && "text-black"} w-full`}>
                Get started with {plan.level}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    </>
  );
};

export default PricingPage;
