import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "../../index.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import React from "react";

export const TimelineElement = ({
  items,
  desc,
  title,
  stackArray,
  projectlinks,
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: " rgba(120, 120, 120, 0.5)", color: "white" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={title}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    >
      <a href={projectlinks[0]} target="_blank" rel="noreferrer">
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          autoPlay
          infinite
          disableDotsControls
          autoPlayInterval="3000"
        />
      </a>

      <div className="mt-4  flex gap-2">
        <a href={projectlinks[0]} target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </a>
        <a
          href={projectlinks[1]}
          rel="noreferrer"
          aria-label="Homepage"
          class="footer-octicon"
          title="GitHub"
          target="_blank"
        >
          <svg
            aria-hidden="true"
            class="octicon octicon-mark-github"
            height="24"
            version="1.1"
            viewBox="0 0 16 16"
            width="24"
          >
            <path
              fill="#FFFFFF"
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
      </div>

      <div className="flex flex-wrap gap-4 mt-4  font-medium">
        {stackArray.map((s) => {
          return (
            <button
              className="p-2 text-sm font-medium bg-gray-300   rounded-full "
              style={{ color: "black" }}
            >
              {s}
            </button>
          );
        })}
      </div>

      <p className="text-sm text-gray-200">{desc}</p>
    </VerticalTimelineElement>
  );
};
