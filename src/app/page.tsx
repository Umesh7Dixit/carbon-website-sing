import HeroSection from "./components/HeroSection";
// import EUSection from "./components/EUSection";
// import SolutionsSection from "./components/SolutionsSection";
// import TextileChallenges from "./components/TextileChallenges";
 
// import IndustryTransformations from "./components/IndustryTransformations";
// import SustainabilitySection from "./components/SustainabilitySection";
// import CarbonCalculatorBanner from "./components/CarbonCalculatorBanner";
// import StoriesOfImpact from "./components/StoriesOfImpact";
// import Testimonials from "./components/Testimonials";
// import SimpleBanner from "./components/SimpleBanner";
// import Earth from "./components/earth";
// import Eudr from "./components/Eudr";
import Trusted from "./components/Trusted";
import ESGInsights from "./components/ESGInsights";
import CarbonSoftware from "./components/CarbonSoftware";
import CarbonZeroJourney from "./components/CarbonZeroJourney";
import ComplianceTracker from "./components/ComplianceTracker";
import CarbonZero from "./components/CarbonZero";
import CarbonFootprint from "./components/CarbonFootprint";
import LatestResources from "./components/LatestResource";
import Journey from "./components/Journey";
import CarbonZeroPlatform from "./components/CarbonZeroPlatform";
import CarbonMilestonePlatform from "./components/CarbonMilestonePlatform";
import TestimonialsSection from "./components/Testimonials";

 

 
export default function Home() {
  return (
    <>
     <main > 
      <HeroSection />
      <Trusted />
      <ESGInsights />
      <CarbonSoftware />
      <CarbonMilestonePlatform />
      <CarbonZeroJourney />
      <ComplianceTracker />
      <CarbonZeroPlatform />
      <CarbonZero />
      <CarbonFootprint />
      <LatestResources />
      {/* <Testimonials/> */}
      <TestimonialsSection/>
      <Journey/>


      {/* <EUSection />
      <SolutionsSection/>
     
      <Earth/>
      <TextileChallenges/>

      <Eudr/>
      <IndustryTransformations/>
      <SustainabilitySection/>
      <CarbonCalculatorBanner/>
      <StoriesOfImpact/>  
      <SimpleBanner/> */}

    </main>
  </>
  );
}






 