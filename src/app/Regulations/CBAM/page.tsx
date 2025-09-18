"use client";

import CarbonZeroPlatform from "./components/CarbonZeroPlatform";
import ComplianceCards from "./components/ComplianceCards";
import FAQ from "./components/CBAMFAQ";
import CBAMHero from "./components/CBAMHero";
import CBAMQualify from "./components/CBAMQualify";
import CBAMReadinessPackage from "./components/CBAMReadinessPackage";
import CBAMText from "./components/CBAMText";
import CBAMTimeline from "./components/CBAMTimeline";
import RegulationPurpose from "./components/RegulationPurpose";




export default function EUDR(){
    return(
        <div>
            <CBAMHero />
            <CBAMText />
            <CBAMQualify />
            <RegulationPurpose />
            <CBAMTimeline />
            <CBAMReadinessPackage />
            <CarbonZeroPlatform />
            <ComplianceCards />
            <FAQ />

        </div>
    );
}


