import React from "react";
import "flowbite";

const Header = ({ ref }) => {
  const resumeLink =
    "https://docs.google.com/document/d/1wKTQx_3vybskRTnWOy5luKddlYFbZsoH4N59MGElHOs/edit?usp=sharing";

  return (
    <>
      <div id="navbar" className=" p-4 m-2 ">
        <div className=" backdrop-blur-3xl text-black shadow-lg flex flex-wrap items-center justify-between">
          <div>
            <a href="#" className="flex items-center">
              <img
                class="w-10 h-10 p-1 mr-3 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={require("./assets/photo_6224083313795118721_y.jpg")}
                alt="Bordered avatar"
              />
              <span className="logo-name self-center text-2xl md:text-xl font-semibold whitespace-nowrap text-blue-700 dark:text-white">
                <span> &lt;</span>
                Siddanth Reddy
                <span>/&gt; </span>
              </span>
            </a>
          </div>

          <div className="flex md:order-2">
            <button
              type="button"
              className="pushable pushable-header Resume-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span class="front">
                {" "}
                <a href={resumeLink}> Resume </a>{" "}
              </span>
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only ">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className=" items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
              <li>
                <a
                  href="# "
                  className="block py-2 pl-3 pr-4 text-blue-700 rounded  md:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-div"
                  className="block py-2 pl-3 pr-4 text-gray-400 rounded  md:hover:text-blue-700 md:p-0  "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#work-experience"
                  className="block py-2 pl-3 pr-4 text-gray-400 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white "
                >
                Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 pl-3 pr-4 text-gray-400 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 "
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#message-form"
                  className="block py-2 pl-3 pr-4 text-gray-400 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
