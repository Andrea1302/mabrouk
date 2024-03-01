import { Fragment, useEffect, useRef } from "react";

//Translations
import { useTranslation } from "react-i18next";
//Style
import "./Discover.scss";

//images
import restaurant from "../../assets/imgs/Ristorante.jpg";
import boat from "../../assets/imgs/barca.jpeg";
import iconLogo from "../../assets/imgs/icon-logo.png";

//Component
import Card from "../card/Card";

//Routes
import routes from "../../routes";

//Utils
import { handleScrollAnimation } from "../../utils/animationUtils";

const cards = [
  {
    id: 1,
    src: restaurant,
    alt: "restaurant-img",
    title: "card.ristorante.titolo",
    link: routes.RESTAURANT,
    description: "card.ristorante.descrizione",
    logo: iconLogo,
  },
  {
    id: 2,
    src: boat,
    alt: "barca-img",
    title: "card.escursioni.titolo",
    link: routes.ESCURSIONI,
    description: "card.escursioni.descrizione",
    logo: iconLogo,
  },
];

const Discover = () => {
  const { t } = useTranslation();
  const cardRef = useRef();

  useEffect(() => {
    const cleanup = handleScrollAnimation(cardRef, "animate_card");
    return cleanup;
  }, []);

  const mappingCard = (card, index) => {
    if (index === 0) {
      return (
        <Fragment key={card.id}>
          <Card product={card} /> <div className="separator"></div>
        </Fragment>
      );
    } else {
      return <Card key={card.id} product={card} />;
    }
  };

  return (
    <div className="container_discover">
      <h2>{t("discover.titolo")}</h2>
      <section className="discover_more" ref={cardRef}>
        {cards.map(mappingCard)}
      </section>
    </div>
  );
};

export default Discover;
