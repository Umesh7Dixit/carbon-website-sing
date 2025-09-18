"use client"
import FoodFeatureSection from "../food/foodComponents/FoodFeatureSection";
import BenefitsSection from "../../components/BenefitsSection";


 
import React from "react";
import FoodScreen from "./foodComponents/FoodScreen";
import FoodDpp from "./foodComponents/FoodDpp";
import FoodDashboardSection from "./foodComponents/FoodDashboardSection";
import FoodPassport from "./foodComponents/FoodPassport";
import Scan from "./foodComponents/Scan";
import OtherSections from "./foodComponents/OtherSections";
import FoodFAQSection from "./foodComponents/FoodFAQSection";

export default function FoodPage() {
  return (
    <main>
       <FoodScreen/>
       <FoodFeatureSection/>
       <FoodDpp/>
       <FoodDashboardSection/>
       <FoodPassport/>
       <BenefitsSection/>
       <Scan/>
       <OtherSections/>
       <FoodFAQSection/>
    </main>
  );
}