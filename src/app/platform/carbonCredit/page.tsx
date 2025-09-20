"use client"

import ResourcesSection from "@/app/Company/components/ResourcesSection";
import CarbonFAQ from "./components/CarbonFAQ";
import CarbonFeatures from "./components/CarbonFeatures";
import CreditHome from "./components/CreditHome";
import Tokenize from "./components/Tokenize";
import Trust from "./components/Trust";


export default function CarbonCredit()
{
    return (
        <div>
            <CreditHome/>
            <Tokenize/>
            <Trust/>
            <CarbonFeatures/>
            <CarbonFAQ/>
            <ResourcesSection/>
        </div>
    );
}