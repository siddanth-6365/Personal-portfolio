import React from "react";
import { Timeline } from "flowbite-react";
import { HeadingCard } from "./Cards/HeadingCard";

const experienceObject = [
  {
    time: "Dec 2023 - Present",
    title: "Teaching Assistant",
    description:
      "Provided hands-on support and addressed technical queries for students enrolled (12000+) in a comprehensive web development program, encompassing MERN stack (HTML, CSS, JavaScript, React, Node.js, MongoDB) and DevOps fundamentals (Docker).",
    company: "100xDevs",
  },
  {
    time: "Aug 2023 - Dec 2023",
    title: "Web Developer Intern",
    description:
      "I successfully refactored and migrated a codebase from a traditional component-based structure to a modular MVVM architecture. During this process, I resolved numerous critical bugs and made some backend APIs and implemented some essential features, including autosave functionality and quick action buttons, to enhance the overall user experience. This work showcased my strong understanding of modern web technologies, such as Svelte, SvelteKit, TypeScript, and MVVM architecture.",
    company: "ONBO",
  },
];

export const WorkExperience = () => {
  return (
    <>
      <div className="text-center pb-4 pt-6" id="work-experience">
        <HeadingCard title={"Work Experience"} />
      </div>
      <div className="flex justify-center items-center text-white pb-4">
        <Timeline>
          {experienceObject.map((work, index) => (
            <Timeline.Item key={index}>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>
                  {" "}
                  <span className="text-gray-200">{work.time} </span>
                </Timeline.Time>
                <Timeline.Title>
                  <span className="text-white"> {work.company} </span>
                </Timeline.Title>
                <Timeline.Title>
                  <span className="text-gray-300"> {work.title} </span>
                </Timeline.Title>
                <Timeline.Body>
                  <div className="max-w-5xl text-gray-400">
                    {work.description}
                  </div>
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </>
  );
};
