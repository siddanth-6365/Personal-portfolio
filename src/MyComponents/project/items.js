
const handleDragStart = (e) => e.preventDefault();

export const frontendItems = [
    {
      images: [
        <img
          alt=""
          src={require("../assets/p1img1.png")}
          onDragStart={handleDragStart}
          role="presentation"
        />,
        <img
          alt=""
          src={require("../assets/p1img2.png")}
          onDragStart={handleDragStart}
          role="presentation"
        />,
        <img
          alt=""
          src={require("../assets/p1img3.png")}
          onDragStart={handleDragStart}
          role="presentation"
        />,
      ],
      stack: ["React", "Tailwind CSS", "Firebase"],
      desc: "This website was built with React JS framework, styled using Tailwind CSS, and Firebase for authentication using email and password. Currently, I am actively working on the project and constantly improving it to enhance its functionality.",
      projectlinks: [
        "https://bquh2t-3000.csb.app/",
        "https://github.com/siddanth-6365/netflix_clone_basic",
      ],
    },
  ];

 export const fullStackItems = [
    {
      images: [
        <img
          alt=""
          src={require("../assets/p3img1.png")}
          onDragStart={handleDragStart}
          role="presentation"
        />,
        <img
          alt=""
          src={require("../assets/p3img2.png")}
          onDragStart={handleDragStart}
          role="presentation"
        />,
      ],
      stack: ["React", "NodeJS", "Tailwind CSS", "MongoDB"],
      desc: "I am still developing WeekUp using the MERN stack. This application allows users to add modules and tasks under each week.i am working on more features like authentication and share link so that new user can add their own data. This is beta version only.",
      projectlinks: [
        "https://zzkv46-3000.csb.app/",
        "https://github.com/siddanth-6365/WeekUp",
      ],
    },
  ];

 export const backendItems = [
    {
      images: [
        <img
          alt=""
          src={require("../assets/p4img1.png")}
          onDragStart={handleDragStart}
          role="presentation"
        />,
        <img
          alt=""
          src={require("../assets/p4img2.png")}
          onDragStart={handleDragStart}
          role="presentation"
        />,
      ],
      stack: ["MySql", "NodeJs", "ExpressJs", "REST Api's"],
      desc: "Developed complete backend microservices-based project including four services: Flights, Booking, Authentication, Notification using: ExpressJs, MySQL, REST APIs , rabbitmq and npm packages (rate limiter,proxy,cron jobs,JWT) also Solved common booking problems",
      projectlinks: [
        "https://github.com/siddanth-6365/Flight-Booking-Backend",
        "https://github.com/siddanth-6365/Flight-Booking-Backend",
      ],
    },
  ];

 export const CppItems = [
    {
      images: [
        <img
          alt=""
          src={require("../assets/p4img1.png")}
          onDragStart={handleDragStart}
          role="presentation"
        />,
        <img
          alt=""
          src={require("../assets/p4img2.png")}
          onDragStart={handleDragStart}
          role="presentation"
        />,
      ],
      stack: ["C++", "data structures", "Algorithms"],
      desc: "I created Jaypee Maps, a campus navigation system utilizing graph data structures and algorithms to optimize movement within College.The system calculates shortest paths based on user-selected locations and transportation modes, streamlining navigation with features like location selection and travel time estimation. This project showcased my skills in applying data structures and algorithms to solve real-world problems",
      projectlinks: [
        "https://github.com/siddanth-6365/Jaypee-Maps",
        "https://github.com/siddanth-6365/Jaypee-Maps",
      ],
    },
  ];
