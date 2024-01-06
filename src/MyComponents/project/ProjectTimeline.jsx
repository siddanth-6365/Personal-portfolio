import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "react-alice-carousel/lib/alice-carousel.css";

import { TimelineElement } from "./TimelineElement";

export const ProjectTimeline = ({ items }) => {
  return (
    <>
      <VerticalTimeline>
        {items.map((item, index) => (
          <TimelineElement
            key={index}
            items={item.images}
            title={item.title}
            stackArray={item.stack}
            desc={item.desc}
            projectlinks={item.projectlinks}
          />
        ))}
      </VerticalTimeline>
    </>
  );
};
