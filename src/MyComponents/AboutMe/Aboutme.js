import React, { useEffect } from "react";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import Skillslist from "./Skillslist";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GithubCalender } from "./GithubCalender";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const skillsvariant = {
  visible: { y: 20, opacity: 1, transition: { duration: 1.3 } },
  hidden: { opacity: 0, y: 100 }, // Move from below the screen
};

const AboutSection = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <div>
        <motion.section class="aboutmesection" id="about-div" ref={ref}>
          <motion.div
            animate={controls}
            initial="hidden"
            variants={skillsvariant}
          >
            <Skillslist />
            <div className="flex flex-col justify-center items-center pb-6">
              <GithubCalender />
            </div>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};

export default AboutSection;
