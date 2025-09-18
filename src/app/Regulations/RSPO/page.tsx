"use client";

import CarbonZeroPlatform from "./components/CarbonZeroPlatform";
import ComplianceCards from "./components/ComplianceCards";
import FAQ from "./components/RSPOFAQ";
import RSPOHero from "./components/RSPOHero";
import RSPOQualify from "./components/RSPOQualify";
import RSPOReadinessPackage from "./components/RSPOReadinessPackage";
import RSPOText from "./components/RSPOText";
import RSPOTimeline from "./components/RSPOTimeline";
import RegulationPurpose from "./components/RegulationPurpose";




export default function EUDR(){
    return(
        <div>
            <RSPOHero />
            <RSPOText />
            <RSPOQualify />
            <RegulationPurpose />
            <RSPOTimeline />
            <RSPOReadinessPackage />
            <CarbonZeroPlatform />
            <ComplianceCards />
            <FAQ />

        </div>
    );
}


