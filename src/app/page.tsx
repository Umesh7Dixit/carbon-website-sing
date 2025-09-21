import HeroSection from "./components/HeroSection";
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
// import ContactHome from "./components/ContactHome";
 
 
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
      <TestimonialsSection/>
      <Journey/>
      {/* <ContactHome/> */}

    </main>
  </>
  );
}






 