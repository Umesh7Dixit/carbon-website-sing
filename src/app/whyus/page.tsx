"use client"

import AutoReport from "./components/AutoReport"
import ContactPage from "./components/ContactPage"
import ERP from "./components/ERP"
import InsightAI from "./components/InsightAI"
import OneView from "./components/OneView"
import Prescripto from "./components/Prescripto"
import Resource from "./components/Resource"
import ScanEase from "./components/ScanEase"
import TakeControl from "./components/TakeControl"


export default function WhyUs(){
    return (
        <div>
            <TakeControl/>
            <ScanEase/>
            <InsightAI/>
            <Prescripto/>
            <OneView/>
            <ERP/>
            <AutoReport/>
            <Resource/>
            <ContactPage/>
        </div>
    )
}