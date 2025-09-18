"use client";

import CarbonZeroPlatform from "./components/CarbonZeroPlatform";
import ComplianceCards from "./components/ComplianceCards";
import FAQ from "./components/TCFDFAQ";
import TCFDHero from "./components/TCFDHero";
import TCFDQualify from "./components/TCFDQualify";
import TCFDReadinessPackage from "./components/TCFDReadinessPackage";
import TCFDText from "./components/TCFDText";
import TCFDTimeline from "./components/TCFDTimeline";
import RegulationPurpose from "./components/RegulationPurpose";




export default function EUDR(){
    return(
        <div>
            <TCFDHero />
            <TCFDText />
            <TCFDQualify />
            <RegulationPurpose />
            <TCFDTimeline />
            <TCFDReadinessPackage />
            <CarbonZeroPlatform />
            <ComplianceCards />
            <FAQ />

        </div>
    );
}


