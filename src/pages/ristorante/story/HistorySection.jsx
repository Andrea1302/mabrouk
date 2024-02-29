import { VerticalTimelineElement } from "react-vertical-timeline-component";

//Style
import "./HistorySection.scss";
const HistorySection = ({ paragraph, title, date }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#262626",
        color: "#f5f5f5",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  #262626",
      }}
      date={date}
      iconStyle={{ background: "#e54141", color: "#262626" }}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>

      <p>{paragraph}</p>
    </VerticalTimelineElement>
  );
};

export default HistorySection;
