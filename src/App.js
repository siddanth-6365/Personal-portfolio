import Header from "./MyComponents/Header";
import Middle from "./MyComponents/Middle";
import Aboutme from "./MyComponents/Aboutme";
import { Projects } from "./MyComponents/Projects";
import { ProjectTimeline } from "./MyComponents/NewProject";


import "./index.css";

import Form from "./MyComponents/Form";

function App() {
  
  return (
    <>
   
      <Header  />
      <Middle />
      <Aboutme />
      
      <ProjectTimeline />
      <Form />
     
    </>
  );
}

export default App;
