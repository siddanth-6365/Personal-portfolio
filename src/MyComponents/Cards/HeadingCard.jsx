import React from "react";

export const HeadingCard = ({ title }) => {
  return (
    <>
      <h1 class="font-bold leading-tight tracking-tight text-3xl md:text-5xl lg:text-3xl">
        <a className="underline-effect" href={"#" + { title }}>
          <span className="text-gray-300">{title} </span>
        </a>
      </h1>
    </>
  );
};
