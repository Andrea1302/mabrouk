import { useNavigate } from "react-router-dom";

//Translation
import { useTranslation } from "react-i18next";

//Style
import "./Card.scss";

//Loghi
import LogoExcursion from "../../assets/imgs/LogoEscursione";
import LogoRestaurant from "../../assets/imgs/LogoMabrouk";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const goTo = (product) => () => {
    navigate(product?.link);
  };
  return (
    <article className="card">
      {product.id === 1 ? (
        <LogoRestaurant onClick={goTo(product)} className="logo" />
      ) : (
        <LogoExcursion onClick={goTo(product)} className="logo" />
      )}
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
