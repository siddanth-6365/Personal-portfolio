import Header from "./MyComponents/Header";
import Middle from "./MyComponents/Middle";
import Aboutme from "./MyComponents/Aboutme";
import { WorkExperience } from "./MyComponents/WorkExperience";
import { ProjectTimeline } from "./MyComponents/NewProject";
import "./index.css";
import Form from "./MyComponents/Form";

function App() {

  return (
    <>
      <Header />
      <Middle />
      <Aboutme />
      {/* <WorkExperience /> */}
      <ProjectTimeline />
      <Form />
    </>
  );
}

export default App;
