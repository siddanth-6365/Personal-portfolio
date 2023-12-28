import React from "react";
import TechCard from "./Cards/TechCard";
import { HeadingCard } from "./Cards/HeadingCard";

const Skillslist = () => {
  return (
    <>
     
      <div className="col-span-2 p-6 text-white md:col-span-2 lg:col-span-3">
        <div class="max-w-2xl pb-8 mx-auto text-center">
          <HeadingCard title={"What I Know"} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <TechCard
            title="Frontend"
            tech={["HTML", "CSS", "Tailwind", "React Js", "Next Js", "Svelte"]}
          />
          <TechCard
            title="Backend"
            tech={["Node Js", "Express Js", "ORMs", "ODMs"]}
          />
          <TechCard
            title="Database"
            tech={["MySql", "MongoDB"]}
          />
          <TechCard title="Devops" tech={["Docker", "GIT"]} />
          <TechCard
            title="Languages"
            tech={["Javascript", "Typescript", "PHP", "C++"]}
          />
        </div>
      </div>
    </>
  );
};

export default Skillslist;
