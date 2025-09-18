"use client";

import CarbonZeroPlatform from "./components/CarbonZeroPlatform";
import ComplianceCards from "./components/ComplianceCards";
import FAQ from "./components/SGXFAQ";
// import EUDRFAQSection from "./components/EUDRFAQ";
import SGXHero from "./components/SGXHero";
import SGXQualify from "./components/SGXQualify";
import SGXReadinessPackage from "./components/SGXReadinessPackage";
import SGXText from "./components/SGXText";
import SGXTimeline from "./components/SGXTimeline";
import RegulationPurpose from "./components/RegulationPurpose";




export default function EUDR(){
    return(
        <div>
            <SGXHero />
            <SGXText />
            <SGXQualify />
            <RegulationPurpose />
            <SGXTimeline />
            <SGXReadinessPackage />
            <CarbonZeroPlatform />
            <ComplianceCards />
            <FAQ />

        </div>
    );
}


