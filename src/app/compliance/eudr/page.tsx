"use client"

import EudrAdvantage from "./eudrComponents.tsx/EudrAdvantage";
import EudrCompliance from "./eudrComponents.tsx/EudrCompliance";
import EudrIndustries from "./eudrComponents.tsx/EudrIndustries";
import EudrInfo        from "./eudrComponents.tsx/EudrInfo";
import EudrStructure from "./eudrComponents.tsx/EudrStructure";
import EudrTimeline from "./eudrComponents.tsx/EudrTimeline";
import Homeeudr from "./eudrComponents.tsx/Homeeudr";

export default function Eudr(){
    return(
        <>
            <Homeeudr/>
            <EudrInfo/>
            <EudrTimeline/>
            <EudrAdvantage/>
            <EudrStructure/>
            <EudrCompliance/>
            <EudrIndustries/>
        </>
    );
}