"use client";

import CarbonZeroPlatform from "./components/CarbonZeroPlatform";
import ComplianceCards from "./components/ComplianceCards";
import FAQ from "./components/BURSAFAQ";
// import EUDRFAQSection from "./components/EUDRFAQ";
import BURSAHero from "./components/BURSAHero";
import BURSAQualify from "./components/BURSAQualify";
import BURSAReadinessPackage from "./components/BURSAReadinessPackage";
import BURSAText from "./components/BURSAText";
import EUDRTimeline from "./components/EUDRTimeline";
import RegulationPurpose from "./components/RegulationPurpose";




export default function EUDR(){
    return(
        <div>
            <BURSAHero />
            <BURSAText />
            <BURSAQualify />
            <RegulationPurpose />
            <EUDRTimeline />
            <BURSAReadinessPackage />
            <CarbonZeroPlatform />
            <ComplianceCards />
            <FAQ />

        </div>
    );
}


