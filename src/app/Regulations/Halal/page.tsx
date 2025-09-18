"use client";

import CarbonZeroPlatform from "./components/CarbonZeroPlatform";
import ComplianceCards from "./components/ComplianceCards";
import FAQ from "./components/HalalFAQ";
import HalalHero from "./components/HalalHero";
import HalalQualify from "./components/HalalQualify";
import HalalReadinessPackage from "./components/HalalReadinessPackage";
import HalalText from "./components/HalalText";
import HalalTimeline from "./components/HalalTimeline";
import RegulationPurpose from "./components/RegulationPurpose";




export default function EUDR(){
    return(
        <div>
            <HalalHero />
            <HalalText />
            <HalalQualify />
            <RegulationPurpose />
            <HalalTimeline />
            <HalalReadinessPackage />
            <CarbonZeroPlatform />
            <ComplianceCards />
            <FAQ />

        </div>
    );
}


