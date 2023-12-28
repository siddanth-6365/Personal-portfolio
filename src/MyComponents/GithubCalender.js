import React from "react";
import GitHubCalendar from "react-github-calendar";
import { HeadingCard } from "./Cards/HeadingCard";

export const GithubCalender = () => {
  return (
    <>
      {/* <h1 class="text-5xl font-bold leading-tight tracking-tight text-gray-300 pb-8 underline ">
        Days I <span className="text-blue-700 font-extrabold">Code </span>
      </h1> */}
      <HeadingCard title={"Days I Code"} />
<div className="pb-10"></div>
        <GitHubCalendar
          username="siddanth-6365"
          blockSize={15}
          year={2023}
          blockMargin={5}
          fontSize={16}
          colorScheme="dark"
          style={{ color: "white" }}
        />
    </>
  );
};
