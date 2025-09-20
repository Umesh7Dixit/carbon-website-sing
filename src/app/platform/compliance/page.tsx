"use client"

import ResourcesSection from "@/app/Company/components/ResourcesSection";
import Cards from "./components/Cards";
import ESGComplianceApp from "./components/ESGComplianceApp";
import FQQCompliance from "./components/FQQCompliance";



export default function Compliance(){
    return (
        <div>
            <ESGComplianceApp/>
            <Cards/>
            <FQQCompliance/>
            <ResourcesSection/>
        </div>
    );
}