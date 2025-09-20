"use client"

import ResourcesSection from "@/app/Company/components/ResourcesSection";
import FAQCorporate from "./components/FAQCorporate";
import NetZero from "./components/Netzero";


export default function CorporateCarbon(){
    return(
        <div>
            <NetZero/>
            <FAQCorporate/>
            <ResourcesSection/>
        </div>
    );
}