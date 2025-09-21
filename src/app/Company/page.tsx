"use client"

import ClimateLeadership from "./components/ClimateLeadership";
// import ContactPage from "./components/ContactPage";
import DefinesUs from "./components/DefinesUs ";
import DifferentiatesUs from "./components/DifferentiatesUs";
import PeopleImpact from "./components/PeopleImpact";
import ResourcesSection from "./components/ResourcesSection";
import SustainableSection from "./components/SustainableSection";


export default function Company(){
    return(
        <div>
            <SustainableSection/>
            <PeopleImpact/>
            <DefinesUs/>
            <DifferentiatesUs/>
            <ClimateLeadership/>
            <ResourcesSection/>
            {/* <ContactPage/> */}
        </div>
    );
}