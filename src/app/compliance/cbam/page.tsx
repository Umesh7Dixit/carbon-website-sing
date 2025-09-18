import AdvantagesSectionComp from "./cbamComponents/AdvantagesSectionComp";
import CbamInfo from "./cbamComponents/CbamInfo";
import CBAMStructure from "./cbamComponents/CBAMStructure";
import ComplianceScreen from "./cbamComponents/ComplianceScreen";
import CBAMTimelineImage from "./cbamComponents/Cbamtimeline";
import Home from "./cbamComponents/home";
import Industries from "./cbamComponents/Industries";



export default function Cbam(){
    return(
        <>
          <Home/>
          <CbamInfo/>
          <CBAMTimelineImage/>
          <AdvantagesSectionComp/>
          <CBAMStructure/>
          <ComplianceScreen/>
          <Industries/>
        </>
    );
}