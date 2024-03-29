import React, { useState, useEffect } from "react";
import EarthCanvas from "./3dModels/Box";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const imagestyle = {
  height: "650px",
  width: "600px",
};
const imagestyleMobile = {
  height: "350px",
  width: "350px",
};
const modelVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, y: -100 }, // Move from above the screen
};
const paraVariant = {
  visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, x: -100 }, // Move from above the screen
};

const HeroSection = () => {
  const roleArray = ["Frontend", "Backend", "FullStack"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const resumeLink =
    "https://docs.google.com/document/d/1iiUdY4-qzZn1aCpZ6ZOeqS0AX_cmZV7V/edit?usp=sharing&ouid=113332697539049869624&rtpof=true&sd=true";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetterIndex((prevIndex) => prevIndex + 1);
    }, 200); // Adjust the interval to control the speed of the animation

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentLetterIndex >= roleArray[currentRoleIndex].length + 1) {
      setCurrentLetterIndex(0);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roleArray.length);
    }
  }, [currentLetterIndex, currentRoleIndex, roleArray]);

  useEffect(() => {
    setDisplayText(roleArray[currentRoleIndex].slice(0, currentLetterIndex));
  }, [currentLetterIndex, currentRoleIndex, roleArray]);

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
      <motion.section class="middle grid w-screen" id="middle">
        <div className="middle-inside flex flex-col w-screen md:flex-row sm:flex-row">
          <div
            class="intro-div flex w-1/2 items-center p-4 justify-center"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={paraVariant}
          >
            <div class=" w-2/3 p-10 m-4">
              <div className=" flex flex-col justify-start items-center gap-4">
                <motion.h1 class="heading-span p-4  text-2xl font-bold  text-center hover:cursor-move">
                  <span class="nameclass  ">{" HEY, I'M Siddanth"} </span>
                </motion.h1>

                <h2 class=" text-xl font-bold  text-center">
                  <span class="nameclass-2  ">
                    {"<An "} {displayText} {" Developer/>"}
                  </span>
                </h2>
                <p class="desc-para text-lg  max-w-[500px] font-mono text-blue-500  text-center ">
                "With a strong foundation in full stack
                  development, I specialize in creating responsive web pages and
                  apps, designing UI, adding interactivity, building
                  robust APIs, and tackling advanced topics"
                 
                </p>
                <div class="hireme-btn">
                  <button class="pushable">
                    <span class="front">
                      <a href={resumeLink}> Resume</a>
                    </span>
                  </button>
                </div>

                <motion.div
                  class={window.innerWidth > 900 ? "social-div" : "social-div"}
                >
                  {/* Social Buttons */}
                  <div class="down">
                    <a
                      href="https://twitter.com/Siddanth6365"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button class="card1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30px"
                          height="30px"
                          viewBox="0 0 512 512"
                          class="twitter"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                      </button>{" "}
                    </a>
                    <a
                      href="https://www.linkedin.com/in/siddanth-reddy/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button class="card4 pb-2 pl-3">
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          class="linkedin"
                          viewBox="0 0 16 16"
                        >
                          {" "}
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{" "}
                        </svg>
                      </button>
                    </a>
                    <a
                      href="https://github.com/siddanth-6365"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button class="card3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 30 30"
                          width="30px"
                          height="30px"
                          class="github"
                        >
                          {" "}
                          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                      </button>{" "}
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            class="img-div-1 w-1/2 flex justify-center items-center sm:order-first"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={modelVariant}
          >
            <div
              class="model-earth "
              style={window.innerWidth > 900 ? imagestyle : imagestyleMobile}
            >
              {/* <img
                src={require("./assets/moonimg.png")}
                alt="web designer"
                classname=" mx-auto"
              /> */}
              <EarthCanvas />
            </div>
          </motion.div>
        </div>

        <div class="scroll-downs ">
          <div class="mousey">
            <div class="scroller"></div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default HeroSection;
