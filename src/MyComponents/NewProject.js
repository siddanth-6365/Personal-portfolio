import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { TimelineElement } from "./TimelineElement";

export const ProjectTimeline = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items1 = [
    <img
      src={require("./assets/p1img1.png")}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={require("./assets/p1img2.png")}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={require("./assets/p1img3.png")}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];

  const items2 = [
    <img
      src={require("./assets/p2img1.png")}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={require("./assets/p2img2.png")}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={require("./assets/p2img4.png")}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];

  const items3 = [
    <img  src={require("./assets/p3img1.png")}  onDragStart={handleDragStart}  role="presentation" />,
    <img  src={require("./assets/p3img2.png")}  onDragStart={handleDragStart}  role="presentation" />,

  ];

  const items4 = [
    <img
      src={require("./assets/p4img1.png")}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={require("./assets/p4img2.png")}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];

  const stack1 = ["React", "Tailwind CSS","Firebase"];
  const stack2 = ["React", "NodeJS", "Tailwind CSS", "MongoDB"];
  const stack3 = ["React", "NodeJS", "Tailwind CSS", "MongoDB"];
  const stack4 = ["MySql", "NodeJs", "ExpressJs", "REST Api's"];

  const desc1 =
    "This website was built with React JS framework, styled using Tailwind CSS, and Firebase for authentication using email and password. Currently, I am actively working on the project and constantly improving it to enhance its functionality.";
  const desc2 =
    "I created Csv_to_Invoice, a website allows shopkeepers to easily upload CSV files containing order details and view a comprehensive list of all orders on a user-friendly dashboard. The website was built using MERN stack along with npm packages like multer for file uploading,cors,and axios.This is just an basic version, lot more to develop it in the future.";
  const desc3 =
    "I am still developing WeekUp using the MERN stack. This application allows users to add modules and tasks under each week.i am working on more features like authentication and share link so that new user can add their own data. This is beta version only.";
  const desc4 =
    "Developed complete backend microservices-based project including four services: Flights, Booking, Authentication, Notification using: ExpressJs, MySQL, REST APIs , rabbitmq and npm packages (rate limiter,proxy,cron jobs,JWT) also Solved common booking problems";

  const projectlink1 = [
    "https://bquh2t-3000.csb.app/",
    "https://github.com/siddanth-6365/netflix_clone_basic",
  ];
  const projectlink2 = [
    "https://34jqzd-3000.csb.app/",
    "https://github.com/siddanth-6365/csv_to_invoice",
  ];
  const projectlink3 = [
    "https://zzkv46-3000.csb.app/",
    "https://github.com/siddanth-6365/WeekUp",
  ];
  const projectlink4 = [
    "https://github.com/siddanth-6365/Airline_project_node_Course",
    "https://github.com/siddanth-6365/Flight_Booking_Service",
  ];

  const iconsvg1 = [
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 512 138"><path fill="white" d="M340.657 0v100.203c12.36.575 24.687 1.27 36.98 2.09v21.245a1822.444 1822.444 0 0 0-58.542-2.959V0h21.562ZM512 .012l-28.077 65.094l28.07 72.438l-.031.013a1789.409 1789.409 0 0 0-24.576-3.323l-15.763-40.656l-15.913 36.882a1815.88 1815.88 0 0 0-22.662-2.36l27.371-63.43L435.352.013h23.325l14.035 36.184L488.318.012H512ZM245.093 119.526V.011h60.19v21.436h-38.628v27.78h29.227v21.245h-29.227v49.05l-21.562.004ZM164.58 21.448V.01h66.69v21.437h-22.565v98.66c-7.197.19-14.386.412-21.56.683V21.448H164.58ZM90.868 126.966V.014h59.89v21.435h-38.331v29.036c8.806-.113 21.327-.24 29.117-.222V71.51c-9.751-.12-20.758.134-29.117.217v32.164a1848.195 1848.195 0 0 1 38.331-2.62v21.247a1815.638 1815.638 0 0 0-59.89 4.45ZM48.571 77.854L48.57.01h21.562v128.96c-7.882.81-15.75 1.673-23.603 2.584L21.56 59.824v74.802a1834.87 1834.87 0 0 0-21.561 2.936V.012H20.49l28.08 77.842Zm346.854 46.965V.012h21.563V126.6c-7.179-.64-14.364-1.23-21.563-1.78Z"/></svg>
  
  
  
  ]
  const iconsvg2 =[
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
</svg>

  ]
  const iconsvg3 =[
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>

  ]
  const iconsvg4=[
    <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path d="M.2528 166.9L.0426 67.99C.0208 57.74 9.508 50.11 19.51 52.34L55.07 60.24C65.63 62.58 74.29 70.11 78.09 80.24L95.1 127.1L223.3 165.6L181.8 20.4C178.9 10.18 186.6 .001 197.2 .001H237.3C248.8 .001 259.5 6.236 265.2 16.31L374.2 210.2L481.5 241.8C497.4 246.5 512.2 254.3 525.2 264.7L559.6 292.2C583.7 311.4 577.7 349.5 548.9 360.5C507.7 376.1 462.7 378.5 420.1 367.4L121.7 289.8C110.6 286.9 100.5 281.1 92.4 272.9L9.536 189.4C3.606 183.4 .2707 175.3 .2528 166.9V166.9zM608 448C625.7 448 640 462.3 640 480C640 497.7 625.7 512 608 512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448H608zM192 368C192 385.7 177.7 400 160 400C142.3 400 128 385.7 128 368C128 350.3 142.3 336 160 336C177.7 336 192 350.3 192 368zM224 384C224 366.3 238.3 352 256 352C273.7 352 288 366.3 288 384C288 401.7 273.7 416 256 416C238.3 416 224 401.7 224 384z" fill="white"></path></svg>
  ]

  return (
    <>
      <h3 id="projects" class="text-4xl font-extrabold leading-tight tracking-tight text-center mb-8  sm:text-3xl ">
      <a className="underline-effect" href="#projects">
        <span className="text-gray-200">Projects </span>
      </a>
    </h3>

      <VerticalTimeline >
        <TimelineElement
          items={items1}
          title="Netflix-clone"
          stackArray={stack1}
          desc={desc1}
          projectlinks={projectlink1}
          iconsvg={iconsvg1}
        />
        <TimelineElement
          items={items2}
          title="CSV_to_Invoice"
          stackArray={stack2}
          desc={desc2}
          projectlinks={projectlink2}
          iconsvg={iconsvg2}

        />
        <TimelineElement
          items={items3}
          title="WeekUp"
          stackArray={stack3}
          desc={desc3}
          projectlinks={projectlink3}
          iconsvg={iconsvg3}

        />
        <TimelineElement
          items={items4}
          title="Airline-Reservation"
          stackArray={stack4}
          desc={desc4}
          projectlinks={projectlink4} 
          iconsvg={iconsvg4}

           />
       
      </VerticalTimeline>
    </>
  );
};
