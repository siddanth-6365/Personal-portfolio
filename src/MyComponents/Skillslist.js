import React from "react";
import TechCard from "./Cards/TechCard";
import { HeadingCard } from "./Cards/HeadingCard";
import { motion } from "framer-motion";

const Skillslist = () => {
  return (
    <>
      <div className="col-span-2 p-6 text-white md:col-span-2 lg:col-span-3">
        <div class="max-w-2xl pb-8 mx-auto text-center">
          <HeadingCard title={"What I Know"} />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div>
            <TechCard
              title="Frontend"
              tech={[
                "HTML",
                "CSS",
                "Tailwind",
                "React Js",
                "Next Js",
                "Svelte",
              ]}
            />
          </motion.div>
          <motion.div>
            <TechCard
              title="Backend"
              tech={["Node Js", "Express Js", "ORMs", "GraphQL"]}
            />
          </motion.div>
          <motion.div>
            <TechCard title="Database" tech={["MySql", "MongoDB","PostgreSQL"]} />
          </motion.div>
          <motion.div>
            <TechCard title="Devops" tech={["Docker", "GIT"]} />
          </motion.div>
          <motion.div>
            <TechCard
              title="Languages"
              tech={["Javascript", "Typescript", "PHP", "C++"]}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Skillslist;
