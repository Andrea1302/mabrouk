import React from "react";
import "./Slogan.scss";
import { RiArrowDownSLine } from "react-icons/ri";

function Slogan() {
  const discover = () => {
    const discoverContainer = document.querySelector(".container_discover");
    discoverContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="container_slogan sentence">
      <div className="flex-end">Mabrouk</div>
      <div className="flex-end small_p">Alghero</div>
      <div className="arrow-container">
        <RiArrowDownSLine onClick={discover} className="arrow" />
      </div>
    </div>
  );
}

export default Slogan;
