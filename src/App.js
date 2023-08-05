import Header from "./MyComponents/Header";
import Middle from "./MyComponents/Middle";
import Aboutme from "./MyComponents/Aboutme";
import { ProjectTimeline } from "./MyComponents/NewProject";
import "./index.css";

import Form from "./MyComponents/Form";
import { motion, useScroll,useSpring } from "framer-motion"


function App() {
 
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  
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
