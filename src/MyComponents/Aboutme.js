import React from "react";
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

import Skillslist from "./Skillslist";


// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const iconstyle = {
  width: "70px",
  height: "80px"
}


const fixediconstyle = {
  width: "60px",
  height: "60px"
}



const AboutSection = () => {
  return (
    <>

      <section class="aboutmesection" id="about-div" >
        <div class="aboutmediv max-w-screen-xl px-4 py-8 mx-auto   lg:px-6 sm:py-16 lg:py-24"  >
          <div  class="max-w-2xl   mx-auto text-center">
            <h1 class="text-5xl font-extrabold leading-tight tracking-tight   sm:text-4xl ">
              <a className="underline-effect" href="#about" >
                <span className="text-gray-300" >About Me </span>
                </a>
            </h1>
          </div>

          <div class="grid grid-cols-1 mt-8 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <div class="space-y-3">
              <lord-icon
                src="https://cdn.lordicon.com/gqqykmqo.json"
                trigger="loop"
                colors="outline:#121331,primary:#4030e8,secondary:#ad6836,tertiary:#4030e8,quaternary:#f3c3ba"
                stroke="60"
                scale="60"
                style={iconstyle}
              >
              </lord-icon>

              <h3 class="text-2xl text-white  font-bold leading-tight ">
                Student
              </h3>
              <p class="text-lg font-normal text-gray-400 ">
                A undergrate at JIIT Noida
              </p>
            </div>

            <div class="space-y-3">
              <lord-icon
                src="https://cdn.lordicon.com/dtgezzsi.json"
                trigger="loop"
                colors="outline:#121331,primary:#4030e8,secondary:#ad6836,tertiary:#4030e8,quaternary:#f3c3ba"
                stroke="60"
                scale="60"
                style={iconstyle}
              >
              </lord-icon>

              <h3 class="text-2xl text-white font-bold leading-tight  ">
                Web Developer
              </h3>
              <p class="text-lg font-normal text-gray-400 dark:text-gray-400">
                I have been actively learning web development for the past few months.
              </p>
            </div>

            <div class="space-y-3">

              <lord-icon
                src="https://cdn.lordicon.com/puvaffet.json"
                trigger="loop"
                colors="outline:#121331,primary:#4030e8,secondary:#ad6836,tertiary:#4030e8,quaternary:#f3c3ba"
                stroke="60"
                scale="60"
                style={iconstyle}
              >
              </lord-icon>
              <h3 class="text-2xl font-bold leading-tight text-white">
                Learner
              </h3>
              <p class="text-lg font-normal text-gray-400 dark:text-gray-400">
                As iam student I have been upskilling myself and exploring in new things
              </p>
            </div>
          </div>
        </div>
<Skillslist/>
      </section>
    


    </>
  );
};

export default AboutSection;
