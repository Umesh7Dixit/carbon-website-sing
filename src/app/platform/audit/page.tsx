"use client"

import ResourcesSection from "@/app/Company/components/ResourcesSection";
import DriveEnergyEfficiency from "./components/DriveEnergyEfficiency";
import EnergyAuditDashboard from "./components/EnergyAuditDashboard";
import FAQSection from "./components/FAQSection";
import Home from "./components/Home";
import ROISection from "./components/ROISection";
import SmartEnergySection from "./components/SmartEnergySection";
import Robust from "./components/Robust";
import SmartEnergy from "./components/SmartEnergy";


export default function Audit(){
    return(
        <div>
            <Home/>
            <EnergyAuditDashboard/>
            <DriveEnergyEfficiency/>
            <SmartEnergySection/>
            <SmartEnergy/>
            <Robust/>
            <ROISection/>
            <FAQSection/>
            <ResourcesSection/>
        </div>
    );
}