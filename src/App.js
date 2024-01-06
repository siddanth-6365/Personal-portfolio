import Header from "./MyComponents/Header";
import Middle from "./MyComponents/Middle";
import Aboutme from "./MyComponents/Aboutme";
import { WorkExperience } from "./MyComponents/WorkExperience";
import {  ProjectSection } from "./MyComponents/project/index";
// import { ProjectTimeline } from "./MyComponents/project/NewProject";
import "./index.css";
import Form from "./MyComponents/Form";

function App() {

  return (
    <>
      <Header />
      <Middle />
      <Aboutme />
      <WorkExperience />
      <ProjectSection />
      {/* <ProjectTimeline /> */}
      <Form />
    </>
  );
}

export default App;
