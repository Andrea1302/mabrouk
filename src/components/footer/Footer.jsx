//Translation
import { useTranslation } from "react-i18next";

//Style
import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id="contact-us">
      <div className="title">{t("contatti.titolo")}</div>
      <section className="container_footer">
        <div className="item_footer">
          <div className="icon_footer">
            <ion-icon name="call-outline"></ion-icon>
          </div>
          <ul>
            <li>
              <a href="tel:+393404035349">+393404035349</a>
            </li>
            <li>
              <a href="tel:+393459751816">+393459751816</a>
            </li>
            <li>
              <a href="tel:079970000">079970000</a>
            </li>
          </ul>
        </div>
        <div className="item_footer center">
          <div className="icon_footer">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <ul>
            <li>
              <a href="mailto:Pasquale.lorenzoni@gmail.com">
                Pasquale.lorenzoni@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="social item_footer">
          <div>
            <span className="title_social">{t("contatti.seguici")}</span>
            <div className="social_icon">
              <a
                href="https://www.facebook.com/mabroukalghero/"
                rel="noreferrer"
                target="_blank"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a
                href="https://www.instagram.com/mabroukaho/"
                rel="noreferrer"
                target="_blank"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a
                href="https://www.tiktok.com/@mabroukAho"
                rel="noreferrer"
                target="_blank"
              >
                <ion-icon name="logo-tiktok"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
