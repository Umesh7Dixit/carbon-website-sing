"use client"



 
import React from "react";
import OurJourney from "../components/OurJourney";
import MissionVisionSection from "../components/MissionVisionSection";
import TeamSection from "../components/TeamSection";

export default function AboutPage() {
  return (
    <main>
        <OurJourney/>
        <MissionVisionSection/>
        <TeamSection/>
    </main>
  );
}
