import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
//Style
import "./Discover.scss";

//imgs
import restaurant from "../../assets/imgs/Ristorante.jpg";
import boat from "../../assets/imgs/barca.jpeg";
import iconLogo from "../../assets/imgs/icon-logo.png";

//Component
import Card from "../card/Card";

//Routes
import routes from "../../routes";

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
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        const isPartiallyVisibleVertically =
          rect.top < windowHeight && rect.bottom >= 0;

        if (isPartiallyVisibleVertically) {
          cardRef.current.classList.add("animate_card");
        } else {
          cardRef.current.classList.remove("animate_card");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mappingCard = (card, index) => {
    if (index === 0) {
      return (
        <>
          <Card product={card} /> <div className="separator"></div>
        </>
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
