"use client"



 
import React from "react";
import ScheduleBanner from "../components/ScheduleBanner";
import TechHero from "../components/TechHero";
import TechnologyFeatures from "../components/TechnologyFeatures";

export default function TechnologyPage() {
  return (
    <main>
      <TechHero />
      <TechnologyFeatures />
       <ScheduleBanner />
    </main>
  );
}
