"use client";

import CarbonZeroPlatform from "./components/CarbonZeroPlatform";
import ComplianceCards from "./components/ComplianceCards";
import FAQ from "./components/EUDRFAQ";
// import EUDRFAQSection from "./components/EUDRFAQ";
import EUDRHero from "./components/EUDRHero";
import EUDRQualify from "./components/EUDRQualify";
import EUDRReadinessPackage from "./components/EUDRReadinessPackage";
import EUDRText from "./components/EUDRText";
import EUDRTimeline from "./components/EUDRTimeline";
import RegulationPurpose from "./components/RegulationPurpose";




export default function EUDR(){
    return(
        <div>
            <EUDRHero />
            <EUDRText />
            <EUDRQualify />
            <RegulationPurpose />
            <EUDRTimeline />
            <EUDRReadinessPackage />
            <CarbonZeroPlatform />
            <ComplianceCards />
            <FAQ />

        </div>
    );
}


