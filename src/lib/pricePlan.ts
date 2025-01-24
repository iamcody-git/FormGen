
export type PricingPlan={
    level:string,
    price:string,
    services:string[]
}

export const pricingPlan:PricingPlan[] = [
    {
        level:"Free",
        price:"$0/month",
        services:[
            "3 Free Credits",
            "Basic support",
            "Limited Features",
            "Community Access"
        ]
    },
    {
        level:"Pro",
        price:"$30/month",
        services:[
            "Unlimited Credits",
            "Basic support",
            "Limited Features",
            "Community Access"
        ]
    },
    {
        level:"Enterprice",
        price:"$99/month",
        services:[
            "Unlimted Credits",
            "Basic support",
            "Limited Features",
            "Community Access",
            'Monthly Updates'
        ]
    },

]