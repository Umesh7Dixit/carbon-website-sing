import BrsrAdvantage from "./brsrCoponents/brsrAdvantage";
import BrsrCompliance from "./brsrCoponents/brsrCompliance";
import BrsrHome from "./brsrCoponents/brsrHome";
import BrsrIndustries from "./brsrCoponents/brsrIndustries";
import BrsrInfo from "./brsrCoponents/brsrInfo";
import BrsrStructure from "./brsrCoponents/brsrStructure";
import BrsrTimeline from "./brsrCoponents/brsrTimeline";



export default function Brsr(){
    return(
        <>
            <BrsrHome/>
            <BrsrInfo/>
            <BrsrTimeline/>
            <BrsrAdvantage/>
            <BrsrStructure/>
            <BrsrCompliance/>
            <BrsrIndustries/>
        </>
    );
}