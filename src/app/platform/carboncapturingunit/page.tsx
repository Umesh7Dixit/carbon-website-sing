"use client"

import ResourcesSection from "@/app/Company/components/ResourcesSection";
import CapturingHome from "./components/CapturingHome";
import FAQCapturing from "./components/FAQCapturing";
import ImpactNumbers from "./components/ImpactNumbers";
import Meter from "./components/Meter";
import CarbonScanIndustriesScreen from "./components/CarbonScanIndustriesScreen";

export default function Carboncapturingunit()
{
    return(
        <div>
            <CapturingHome/>
            <ImpactNumbers/>
            <Meter/>
            <CarbonScanIndustriesScreen/>
            <FAQCapturing/>
            <ResourcesSection/>
        </div>
    );
}