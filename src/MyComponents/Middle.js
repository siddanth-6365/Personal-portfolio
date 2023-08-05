import React,{useState,useEffect} from "react";
import EarthCanvas from "./3dModels/Box";


const imagestyle = {
  
  height: "650px",
  width: "600px",
 
};
const imagestyleMobile= {
height:"350px",
width:"350px"
}


const Middle = () => {

  const roleArray = ["Frontend","Backend","Full-Stack"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetterIndex((prevIndex) => prevIndex + 1);
    }, 200); // Adjust the interval to control the speed of the animation

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentLetterIndex >= roleArray[currentRoleIndex].length + 1) {
      setCurrentLetterIndex(0);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roleArray.length );
    }
  }, [currentLetterIndex, currentRoleIndex, roleArray]);

  useEffect(() => {
    setDisplayText(roleArray[currentRoleIndex].slice(0, currentLetterIndex));
  }, [currentLetterIndex, currentRoleIndex, roleArray]);


  return (
    <>
      <section class="middle grid w-screen    " id="middle">
        <div className="middle-inside flex flex-col w-screen md:flex-row sm:flex-row">

         
            <div class="intro-div flex w-1/2 items-center p-5  justify-center">
              <div class=" w-2/3 p-10 m-4    ">
                <div className=" flex flex-col justify-start items-center">
                
                  <h1 class="heading-span  text-2xl font-bold mb-4 text-center">
                    <span class="nameclass  ">
                      {" HEY, I'M Siddanth Reddy "}{" "}
                    </span>
                  </h1>

                  <h2 class=" text-xl font-bold mb-4 text-center">
                    <span class="nameclass-2  ">
                       {"<An "}   {displayText}  {" Developer/>"}
                    </span>
                  </h2>
                  <p class="text-lg italic max-w-[500px] font-mono text-blue-500 mb-6 text-center mt-3">
                    "I have been learning and developing my skills in
                    web development for the past few months"
                  </p>
                  <div class="hireme-btn mt-5">
                    <button class="pushable">
                      <span class="front">
                        <a href="mailto:siddanthe.edu@gmail.com"> Hire Me</a>
                      </span>
                    </button>
                  </div>

                  <div class={window.innerWidth >900 ? "social-div mt-8" : "social-div mt-2" } >
                    <div class="down">
                      <a
                        href="https://www.instagram.com/siddanth.here/"
                        target="_blank"
                      >
                        <button class="card1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            src="http://www.w3.org/1999/xlink"
                            viewBox="0,0,256,256"
                            width="30px"
                            height="30px"
                            fill-rule="nonzero"
                            class="instagram"
                          >
                            <g
                              fill-rule="nonzero"
                              stroke="none"
                              stroke-width="1"
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                              stroke-miterlimit="10"
                              stroke-dasharray=""
                              stroke-dashoffset="0"
                              font-family="none"
                              font-weight="none"
                              font-size="none"
                              text-anchor="none"
                            >
                              <g transform="scale(8,8)">
                                <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                              </g>
                            </g>
                          </svg>
                        </button>{" "}
                      </a>
                      <a
                        href="https://github.com/siddanth-6365"
                        target="_blank"
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
                      <a
                        href="https://www.linkedin.com/in/siddanth-reddy/"
                        target="_blank"
                      >
                        <button class="card4 pb-2 pl-3">
                          <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            fill="currentColor"
                            class="linkedin"
                            viewBox="0 0 16 16"
                          >
                            {" "}
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{" "}
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
       

          <div class="img-div-1 w-1/2 flex justify-center items-center sm:order-first">
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
          </div>
        </div>

        <div class="scroll-downs ">
          <div class="mousey">
            <div class="scroller"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Middle;
