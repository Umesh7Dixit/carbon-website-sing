"use client"

// import ContactPage from "../Company/components/ContactPage";
import ResourcesSection from "../Company/components/ResourcesSection";
import CoursesPage from "./components/CoursesPage";
import LearningPage from "./components/LearningPage";
import TestimonialSection from "./components/TestimonialSection";
import ComplianceTrainingSection from "./components/TrainingProgramsSection";


export default function Education(){
    return (
        <div>
            <LearningPage/>
            <CoursesPage/>
            <ComplianceTrainingSection/>
            <TestimonialSection/>
            <ResourcesSection/>
            {/* <ContactPage/> */}
        </div>
    );
}