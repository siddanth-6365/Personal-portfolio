import { cn } from "./cn.ts";

const TechCard = ({ title, tech }) => {
  return (
    <div className="flex-1 flex flex-col gap-4 bg-gray-800 p-4 rounded-md shadow-lg">
      <div className="text-primary font-medium text-lg tracking-wider">
        {title}
      </div>
      <div className="flex flex-wrap gap-2 ">
        {tech.map((item, i) => (
          <div
            key={i}
            className={cn(
              "rounded-md bg-body text-xs text-primary p-2",
              item === "Tailwind" && "border",
              item === "Javascript" && "border",
              item === "React Js" && "border",
              item === "Next Js" && "border",
              item === "Node Js" && "border",
              item === "Express Js" && "border",
              item === "MySql" && "border",
              item === "MongoDB" && "border",
              item === "Docker" && "border",
              item === "GIT" && "border",
              item === "Svelte" && "border",
              item === "GraphQL" && "border"
            )}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
