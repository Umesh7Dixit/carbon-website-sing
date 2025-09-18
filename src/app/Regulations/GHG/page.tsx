"use client";

import CarbonZeroPlatform from "./components/CarbonZeroPlatform";
import ComplianceCards from "./components/ComplianceCards";
import FAQ from "./components/GHGFAQ";
import BURSAHero from "./components/BURSAHero";
import GHGQualify from "./components/GHGQualify";
import GHGReadinessPackage from "./components/GHGReadinessPackage";
import GHGText from "./components/GHGText";
import RegulationPurpose from "./components/RegulationPurpose";




export default function EUDR(){
    return(
        <div>
            <BURSAHero />
            <GHGText />
            <GHGQualify />
            <RegulationPurpose />
            <GHGReadinessPackage />
            <CarbonZeroPlatform />
            <ComplianceCards />
            <FAQ />

        </div>
    );
}


