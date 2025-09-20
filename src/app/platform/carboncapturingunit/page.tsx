"use client"

import ResourcesSection from "@/app/Company/components/ResourcesSection";
import CapturingHome from "./components/CapturingHome";
import FAQCapturing from "./components/FAQCapturing";
import ImpactNumbers from "./components/ImpactNumbers";

export default function Carboncapturingunit()
{
    return(
        <div>
            <CapturingHome/>
            <ImpactNumbers/>
            <FAQCapturing/>
            <ResourcesSection/>
        </div>
    );
}