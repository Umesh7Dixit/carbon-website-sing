"use client"

import ResourcesSection from "@/app/Company/components/ResourcesSection";
import FAQLCA from "./components/FAQLCA";
import Manufacturing from "./components/Manufacturing";
import FlowModel from "./components/FlowModel";
import Database from "./components/Database";
import BuildLca from "./components/BuildLca";
import LifecycleAssessmentScreen from "./components/LifecycleAssessmentScreen";
import CarbonScanDeliverablesScreen from "./components/CarbonScanDeliverablesScreen";

export default function Lca(){
    return (
        <div>
            <BuildLca/>
            <LifecycleAssessmentScreen/>
            <Manufacturing/>
            <Database/>
            <FlowModel/>
            <CarbonScanDeliverablesScreen/>
            <FAQLCA/>
            <ResourcesSection/>
        </div>
    );
}