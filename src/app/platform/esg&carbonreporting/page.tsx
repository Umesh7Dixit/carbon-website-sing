"use client"

import ResourcesSection from "@/app/Company/components/ResourcesSection";
import AuditReadySection from "./components/AuditReadySection";
import FAQESG from "./components/FAQESG";
import OurApproach from "./components/OurApproach";
import TrustedForCompliance from "./components/TrustedForCompliance";
import WhatGet from "./components/WhatGet";
import HeroSplit from "./components/HeroSplit";


export default function EsgCarbonReport(){
    return(
        <div>
            <AuditReadySection/>
            <WhatGet/>
            <OurApproach/>
            <HeroSplit/>
            <TrustedForCompliance/>
            <FAQESG/>
            <ResourcesSection/>
        </div>
    );
}