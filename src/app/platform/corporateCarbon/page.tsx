"use client"

import ResourcesSection from "@/app/Company/components/ResourcesSection";
import FAQCorporate from "./components/FAQCorporate";
import NetZero from "./components/Netzero";
import RawData from "./components/RawData";
import Finance from "./components/Finance";
import CarbonAccountingScreen from "./components/CarbonAccountingScreennew";
import ImpactDashboardScreen from "./components/ImpactDashboardScreen";
import Know from "./components/Know";
import AccurateResultsScreen from "./components/AccurateResultsScreen";
import Clarity from "./components/Clarity";
import Guidance from "./components/Guidance";


export default function CorporateCarbon(){
    return(
        <div>
            <RawData/>
            <Finance/>
            <CarbonAccountingScreen/>
            <ImpactDashboardScreen/>
            <AccurateResultsScreen/>
            <Know/>
            <Clarity/>
            <Guidance/>
            <NetZero/>
            <FAQCorporate/>
            <ResourcesSection/>
        </div>
    );
}