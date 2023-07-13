import React from "react";


const skillsicon = {
  fontSize: "4rem",
  color: "#868e96",

}
const tailwindicon = {
  height: "60px",
  width: "50px",

}

const Skillslist = () => {
  return (
    <>
      <section className="">
        <div class="skills-div max-w-2xl mx-auto text-center">
          <h1 class="text-4xl  font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl ">
            <a className="underline-effect" href="#">
              <span className="text-white" > Skills</span>
            </a>
          </h1>
        </div>
        <br></br>
        <div class="skills-divlist flex flex-wrap justify-center space-x-4   mt-3 mb-6 items-center gap-4">


          <li>
            <i class="fa-brands fa-html5  " >
            </i>
            <p className="text-gray-500" >HTML</p>
          </li>
          <li>
            <i class="fa-brands fa-css3-alt "  ></i>
            <p className="text-gray-500" >CSS/Tailwind CSS</p>
          </li><li>
            <i class="fa-brands fa-js "  ></i>
            <p className="text-gray-500" >JavaScript</p>

          </li>

          <li>
            <i class="fab fa-c "  ></i>
            <p className="text-gray-500" >C/C++</p>
          </li>
          <li>
            <i class="fa-brands fa-node" ></i>
            <p className="text-gray-500" >Node js(Express JS)</p>
          </li>
         
          <li>
            <i class="fa-brands fa-react" ></i>

            <p className="text-gray-500" >React js</p>
          </li>
          <li>
            <i class="fas fa-database" ></i>
            <p className="text-gray-500" >MySql and MongoDb</p>
          </li>
          <li>
            <i class="fab fa-github" ></i>

            <p className="text-gray-500" >Git/GitHub</p>
          </li>
         
        </div>

        <br></br>
        <br></br>
      </section>
    </>
  );
};

export default Skillslist;
