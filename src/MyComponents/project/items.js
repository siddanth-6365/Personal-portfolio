const handleDragStart = (e) => e.preventDefault();

export const frontendItems = [
  {
    title: "Netflix-Clone",
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
    title: "leetcode-stats-api",
    images: [
      <img
        className="consistent-image"
        alt=""
        src={require("../assets/leetcode-pimg1.png")}
        onDragStart={handleDragStart}
        role="presentation"
      />,
      <img
        className="consistent-image"
        alt=""
        src={require("../assets/leetcode-pimg2.png")}
        onDragStart={handleDragStart}
        role="presentation"
      />,
    ],
    stack: ["GraphQL", "NodeJS", "Nextra-Nextjs"],
    desc: "his project aims to enhance the accessibility and ease of integration for developers using LeetCode data by converting the existing LeetCode API, which is based on GraphQL, into a RESTful API. The primary goal is to provide a straightforward way for developers to retrieve valuable statistics and information about LeetCode users and their problem-solving activities.",
    projectlinks: [
      "https://leetcode-restful-api.vercel.app/",
      "https://github.com/siddanth-6365/leetcode-Stats-api",
    ],
  },
  {
    title: "Week-up",
    images: [
      <img
        className="consistent-image"
        alt=""
        src={require("../assets/p3img1.png")}
        onDragStart={handleDragStart}
        role="presentation"
      />,
      <img
        className="consistent-image"
        alt=""
        src={require("../assets/p3img2.png")}
        onDragStart={handleDragStart}
        role="presentation"
      />,
    ],
    stack: ["React", "NodeJS", "Tailwind CSS", "MongoDB"],
    desc: "WeekUp using the MERN stack. This application allows users to add modules and tasks under each week.i am working on more features like authentication and share link so that new user can add their own data. This is beta version only.",
    projectlinks: [
      "https://zzkv46-3000.csb.app/",
      "https://github.com/siddanth-6365/WeekUp",
    ],
  },
];

export const backendItems = [
  {
    title: "Flight-Booking",
    images: [
      <img
        alt=""
        className="consistent-image"
        src={require("../assets/bp-1.webp")}
        onDragStart={handleDragStart}
        role="presentation"
      />,
      <img
        className="consistent-image"
        alt=""
        src={require("../assets/p4img1.png")}
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
  {
    title: "threads-apps-backend",
    images: [
      <img
        className="consistent-image"
        alt=""
        src={require("../assets/bp22.png")}
        onDragStart={handleDragStart}
        role="presentation"
      />,
    ],
    stack: [
      "GraphQL",
      "Typescript",
      "Prisma",
      "ExpressJS",
      "Docker-PostgreSQL",
    ],
    desc: "A robust backend API clone of the Threads app by Facebook, built with GraphQL and a modern tech stack Seamlessly handles user authentication, thread creation, media management, and interactions. Designed with a focus on scalability, maintainability, and developer experience",
    projectlinks: [
      "https://github.com/siddanth-6365/Threads-app-backend-graphql",
      "https://github.com/siddanth-6365/Threads-app-backend-graphql",
    ],
  },
];

export const CppItems = [
  {
    title: "Jaypee-Maps",
    images: [
      <img
        className="consistent-image"
        alt=""
        src={require("../assets/jp-1.png")}
        onDragStart={handleDragStart}
        role="presentation"
      />,
      <img
        className="consistent-image"
        alt=""
        src={require("../assets/jp-2.png")}
        onDragStart={handleDragStart}
        role="presentation"
      />,
      <img
        className="consistent-image"
        alt=""
        src={require("../assets/jp-3.png")}
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

export const TopItems = [
  backendItems[0],
  fullStackItems[0],
  backendItems[1],
  frontendItems[0],
  CppItems[0],
];
