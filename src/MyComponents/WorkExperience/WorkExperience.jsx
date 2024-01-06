import React from "react";
import { Timeline } from "flowbite-react";
import { HeadingCard } from "../Cards/HeadingCard";
import { motion } from "framer-motion";
import { experienceObject } from "./experienceObject";

export const WorkExperience = () => {
  return (
    <>
      <div className="text-center pb-4 pt-6" id="work-experience">
        <HeadingCard title={"Work Experience"} />
      </div>
      <motion.div
        className="flex justify-center items-center text-white pb-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
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
      </motion.div>
    </>
  );
};
