"use client"



 
import React from "react";
import TextileScreen from "../industriesComponents/TextileScreen";
import FeatureSection from "../industriesComponents/FeatureSection";
import Dpp from "../industriesComponents/Dpp";
import DashboardSection from "../industriesComponents/DashboardSection";
import BenefitsSection from "../../components/BenefitsSection";
import IndustrySection from "../industriesComponents/IndustrySection";
import FAQSection from "../industriesComponents/FAQSection";

// import TextileScreen from "../industriesComponents/TextileScreen"
 

export default function TextilePage() {
  return (
    <main>
       <TextileScreen/>
       <FeatureSection/>
       <Dpp/>
       <DashboardSection/>
       <BenefitsSection/>
       <IndustrySection/>
       <FAQSection/>
 
    </main>
  );
}
