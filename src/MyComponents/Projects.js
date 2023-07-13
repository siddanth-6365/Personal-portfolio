import React from "react";

export const Projects = () => {
  return (
    <section id="projects h-screen w-screen">
      <h3 class="text-4xl font-extrabold leading-tight tracking-tight   sm:text-4xl ">
        <a className="underline-effect" href="#about">
          <span className="text-gray-200">Projects </span>
        </a>
      </h3>

      <div class="projects-container ">
        
        <div className="pros lg:flex  items-center ">
          <div className="w-1/2 ">
            <a  href="https://bquh2t-3000.csb.app/"  target="_blank"  class="project-tile"   >
              <img src={require("./assets/pimg1.png")} alt="netlix" />
            </a>
          </div>
          <div className="w-1/2 flex flex-col items-center  p-2">
            <h1 class="font-bold text-blue-500 underline uppercase text-2xl lg:text-2xl mb-5">
              NETFLIX-CLONE
            </h1>
            <p className="text-gray-400">
              {" "}
              <span className="text-white">Stack :</span> React js , Tailwind CSS{" "} </p>
            <p className="text-gray-400 mt-4 sm:text-sm">
              {" "}
              This website was built with React JS framework, styled using
              Tailwind CSS, and Firebase for authentication using email and
              password. Currently, I am actively working on the project and
              constantly improving it to enhance its functionality.
            </p>
            <p className="mt-3">
              <a
                href="https://github.com/siddanth-6365/netflix_clone_basic"
                target="_blank"
                rel="noreferrer noopener"
                class="transition-transform transform hover:scale-125"
              >
                <span class="sr-only">Github</span>
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"
                  ></path>
                </svg>
              </a>
            </p>
          </div>
        </div>

        <div className="pros lg:flex sm:flex sm:flex-col items-center ">
          <div className="w-1/2 ">
            <a
              href="https://github.com/siddanth-6365/Airline_project_node_Course"
              target="_blank"
              class="project-tile"
            >
              <img src={require("./assets/pimg3.png")} alt="netlix" />
            </a>
          </div>
          <div className="w-1/2 flex flex-col items-center  p-2">
            <h1 class="font-bold text-blue-500 underline uppercase text-xl lg:text-2xl mb-5">
              Airline-reservation ( backend project )
            </h1>
            <p className="text-gray-400">
              {" "}
              <span className="text-white">Stack :</span> ExpressJs, MySQL, REST Api and npm-packages
              {" "}
            </p>
            <p className="text-gray-400 mt-4">
              {" "}
              Developed backend microservices-based project including
                      four services: Flights,Booking,Authentication,Notification using: ExpressJs, MySQL, REST
                      APIs , rabbitmq and npm packages{"  "}
                      (rate limiter,proxy,cron jobs,JWT) also Solved common
                      booking problems
            </p>
            <p className="mt-3">
              <a
                href="https://github.com/siddanth-6365/Flight_Booking_Service"
                target="_blank"
                rel="noreferrer noopener"
                class="transition-transform transform hover:scale-125"
              >
                <span class="sr-only">Github</span>
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"
                  ></path>
                </svg>
              </a>
            </p>
          </div>
        </div>

        <div className="pros lg:flex sm:flex sm:flex-col items-center ">
          <div className="w-1/2 ">
            <a
            href="https://siddanth-6365.github.io/Todo-List_react/"
              target="_blank"
              class="project-tile"
            >
              <img src={require("./assets/pimg2.png")} alt="netlix" />
            </a>
          </div>

          <div className="w-1/2 flex flex-col items-center  p-2">
            <h1 class="font-bold text-blue-500 underline uppercase text-2xl lg:text-2xl mb-5">
             2do-list
            </h1>
            <p className="text-gray-400">
              {" "}
              <span className="text-white">Stack :</span> React js , Bootstrap
              {" "}
            </p>
            <p className="text-gray-400 mt-4">
              {" "}
              This is a basic Todo-list website using frameworks like React js ,bootstrap and localStorage.In this project in
                      react js i have used JavaScript XML (JSX) ,for styling i
                      used bootstrap a CSS framework and for storage i have used
                      a localStorage concept in js which allow you to store and
                      access data without expiration.
            </p>
            <p className="mt-3">
              <a
                href="https://github.com/siddanth-6365/netflix_clone_basic"
                target="_blank"
                rel="noreferrer noopener"
                class="transition-transform transform hover:scale-125"
              >
                <span class="sr-only">Github</span>
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"
                  ></path>
                </svg>
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
