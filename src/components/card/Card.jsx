import { useNavigate } from "react-router-dom";

//Translation
import { useTranslation } from "react-i18next";

//Style
import "./Card.scss";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const goTo = (product) => () => {
    navigate(product?.link);
  };
  return (
    <article className="card">
      <img className="card_img" src={product.src} alt={product.alt} />
      <div className="container_description">
        <div>
          <div className="title">{t(product.title)}</div>
          <p>{t(product.description)}</p>
        </div>

        <div onClick={goTo(product)} className="discover_btn">
          <span>{t("common.discoverMore")}</span>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </div>
    </article>
  );
};

export default Card;
