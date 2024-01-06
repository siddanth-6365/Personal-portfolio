import React, { useState } from "react";
import { Button } from "flowbite-react";
import { ProjectTimeline } from "./ProjectTimeline";
import {
  frontendItems,
  fullStackItems,
  backendItems,
  CppItems,
  TopItems,
} from "./items";

export const ProjectSection = () => {
  const StackButtons = ["Top", "Full-stack", "Frontend", "Backend", "C++"];
  const [selectedStack, setSelectedStack] = useState("Top");

  const getSelectedItems = () => {
    switch (selectedStack) {
      case "Top":
        return TopItems;
      case "Frontend":
        return frontendItems;
      case "Full-stack":
        return fullStackItems;
      case "Backend":
        return backendItems;
      case "C++":
        return CppItems;
      default:
        return [];
    }
  };
  return (
    <>
      <h3
        id="projects"
        className="text-4xl font-extrabold leading-tight tracking-tight text-center mb-8  sm:text-3xl "
      >
        <a className="underline-effect" href="#projects">
          <span className="text-gray-200">Projects </span>
        </a>
      </h3>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {StackButtons.map((stack, i) => (
          <Button
            key={i}
            onClick={() => setSelectedStack(stack)}
            style={{
              backgroundColor: selectedStack === stack ? "blue" : "",
            }}
          >
            {stack}
          </Button>
        ))}
      </div>
      <ProjectTimeline items={getSelectedItems()} />
    </>
  );
};
