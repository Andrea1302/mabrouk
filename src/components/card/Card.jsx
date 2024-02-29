import { useNavigate } from "react-router-dom";

//Translation
import { useTranslation } from "react-i18next";

//Style
import "./Card.scss";

const Card = ({ product, ref }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const goTo = (product) => () => {
    navigate(product?.link);
  };
  return (
    <article className="card">
      <img
        className="logo"
        onClick={goTo(product)}
        src={product.logo}
        alt={"logo" + product.alt}
      ></img>
      {/* <img className="card_img" src={product.src} alt={product.alt} /> */}
      <div className="container_description">
        <div className="title">{t(product.title)}</div>
        <p>{t(product.description)}</p>
        <div onClick={goTo(product)} className="discover_btn">
          <span>{t("common.discoverMore")}</span>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </div>
    </article>
  );
};

export default Card;
