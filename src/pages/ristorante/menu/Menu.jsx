//Style
import "./Menu.scss";
import "../Restaurant.scss";

//articles
import { articles } from "./articles";

//Translation
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();
  const mappingArticle = (article, index) => {
    const mappingServices = (service, i) => {
      return <li key={i}>{t(service)}</li>;
    };
    return (
      <article
        className="card_menu"
        key={article.id}
        style={
          index === 0
            ? { paddingTop: 0 }
            : index % 2 !== 0
            ? { flexDirection: "row-reverse" }
            : undefined
        }
      >
        <div className="detail_menu">
          <h3 style={{ textTransform: "uppercase" }}>{t(article.title)}</h3>

          <ul className="services_ul">
            {article.services.map(mappingServices)}
          </ul>
          <div className="tot_menu">
            <span>{t("ristorante.menu.totale")}</span>
            <span>{article.tot} €</span>
          </div>
        </div>
        <img className="default_img" src={article.src} alt={article.alt} />
      </article>
    );
  };
  return (
    <section className="menu_wrapper">
      <h2>{t("ristorante.menu.titolo")}</h2>
      <h5>{t("ristorante.menu.sottotitolo")}</h5>
      <h6>{t("ristorante.menu.disclaimer")}</h6>
      <div className="container_card_menu">{articles.map(mappingArticle)}</div>
      <p className="disclaimer">{t("ristorante.menu.prenotazione")}</p>
      <p className="disclaimer_scelta_menu">
        {t("ristorante.menu.sceltaMenu")}
      </p>
    </section>
  );
};

export default Menu;
