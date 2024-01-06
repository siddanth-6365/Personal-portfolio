import "./index.css";
import Header from "./MyComponents/Header";
import HeroSection from "./MyComponents/HeroSection";
import Aboutme from "./MyComponents/AboutMe/Aboutme";
import { WorkExperience } from "./MyComponents/WorkExperience/WorkExperience";
import { ProjectSection } from "./MyComponents/project/index";
import Form from "./MyComponents/Form";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Aboutme />
      <WorkExperience />
      <ProjectSection />
      <Form />
    </>
  );
}

export default App;
