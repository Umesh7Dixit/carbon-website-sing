 
import React from "react";
import CarbonScreen from "./carbonComponents/carbonScreen";
import CarbonSection from "./carbonComponents/carbonSection";
import PartnersSection from "./carbonComponents/PartnersSection";
import AdvantagesSection from "./carbonComponents/AdvantagesSection";
import BenefitSectionCarbon from "./carbonComponents/BenefitSectionCarbon";
import IndustrySectionCarbon from "./carbonComponents/IndustrySectionCarbon";
 
 

export default function CarbonPage() {
  return (
    <main>
        
        <CarbonScreen/>
        <CarbonSection/>
        <PartnersSection/>
        <AdvantagesSection/>
        <BenefitSectionCarbon/>
        <IndustrySectionCarbon/>
    </main>
  );
}
