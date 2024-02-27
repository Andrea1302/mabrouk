import { useState } from "react";

//Style
import "./Restaurant.scss";

//Components
import Container from "../../components/container/Container";
import Story from "./story/Story";
import Menu from "./menu/Menu";

//translations
import { useTranslation } from "react-i18next";

const Restaurant = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("story");

  const handleSection = (par) => () => {
    setActiveSection(par);
  };
  return (
    <Container>
      <div className="restaurant-container">
        <nav>
          <ul>
            <li
              onClick={handleSection("story")}
              className={activeSection === "story" ? "active first" : "first"}
            >
              {t("ristorante.storyLink")}
            </li>
            <li
              onClick={handleSection("menu")}
              className={activeSection !== "story" ? "active second" : "second"}
            >
              {t("ristorante.menuLink")}
            </li>
          </ul>
        </nav>
        {activeSection === "story" ? <Story /> : <Menu />}
      </div>
    </Container>
  );
};

export default Restaurant;
