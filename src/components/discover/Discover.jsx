//Style
import "./Discover.scss";

//imgs
import restaurant from "../../assets/imgs/Ristorante.jpg";
import boat from "../../assets/imgs/barca.jpeg";

//Component
import Card from "../card/Card";

//Routes
import routes from "../../routes";
import { useTranslation } from "react-i18next";

const cards = [
  {
    id: 1,
    src: restaurant,
    alt: "restaurant-img",
    title: "card.ristorante.titolo",
    link: routes.RESTAURANT,
    description: "card.ristorante.descrizione",
  },
  {
    id: 2,
    src: boat,
    alt: "barca-img",
    title: "card.escursioni.titolo",
    link: routes.ESCURSIONI,
    description: "card.escursioni.descrizione",
  },
];

const Discover = () => {
  const { t } = useTranslation();
  const mappingCard = (card) => {
    return <Card key={card.id} product={card} />;
  };
  return (
    <div className="container_discover">
      <h2>{t("discover.titolo")}</h2>
      <h6>{t("discover.sottotitolo")}</h6>
      <section className="discover_more">{cards.map(mappingCard)}</section>
    </div>
  );
};

export default Discover;
