import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";
import logoMabrouk from "../../assets/imgs/logoMabrouk.png";
import itaLang from "../../assets/imgs/itaLang.png";
import ukFlag from "../../assets/imgs/ukFlag.png";
import routes from "../../routes";
import { useTranslation } from "react-i18next";

const initialStateLanguages = [
  {
    id: "it",
    active: true,
    src: itaLang,
    alt: "logo italia",
  },
  {
    id: "en",
    active: false,
    src: ukFlag,
    alt: "logo regno unito",
  },
];

const initialStateLinks = [
  {
    text: "header.homepage",
    routeLink: "HOMEPAGE",
    active: true,
  },
  {
    text: "header.escursioni",
    routeLink: "ESCURSIONI",
    active: false,
  },
  {
    text: "header.ristorante",
    routeLink: "RESTAURANT",
    active: false,
  },
  {
    text: "header.contatti",
    routeLink: "CONTATTI",
    active: false,
  },
];

const Header = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [links, setLinks] = useState(initialStateLinks);
  const [langs, setLangs] = useState(initialStateLanguages);
  const [width, setWidth] = useState(window.innerWidth);
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [inScroll, setInscroll] = useState(false);
  const [hundredScroll, setHundredScroll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    function handleScroll() {
      const height = window.innerHeight;
      const headerHeight = height / 10;
      const heightWithoutHeader = height - headerHeight;

      if (window.scrollY > heightWithoutHeader && !hundredScroll) {
        setHundredScroll(true);
      } else if (window.scrollY < heightWithoutHeader && hundredScroll) {
        setHundredScroll(false);
      }
      if (window.scrollY > 0 && !inScroll) {
        setInscroll(true);
      } else if (window.scrollY === 0 && inScroll) {
        setInscroll(false);
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inScroll, hundredScroll]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const calcActiveLink = (text) => {
      setLinks((prevLinks) => {
        return prevLinks.map((link) => ({
          ...link,
          active: link.routeLink === text,
        }));
      });
    };

    switch (pathname) {
      case routes["ESCURSIONI"]:
        calcActiveLink("ESCURSIONI");
        break;
      case routes["RESTAURANT"]:
        calcActiveLink("RESTAURANT");
        break;
      default:
        calcActiveLink("HOMEPAGE");
        break;
    }
  }, [pathname]);

  const goTo = (link) => () => {
    if (isDropdownOpened) {
      setIsDropdownOpened(false);
    }
    if (link !== "CONTATTI") {
      navigate(routes[link]);
    } else {
      const contacts = document.querySelector("#contact-us");
      contacts.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const mappingLinks = (link) => (
    <li
      onClick={goTo(link.routeLink)}
      className={link.active ? "active" : undefined}
      key={link.text}
    >
      {t(link.text)}
    </li>
  );

  const changeLang = (id) => () => {
    setLangs((prevLangs) => {
      return prevLangs.map((lang) => ({
        ...lang,
        active: lang.id === id,
      }));
    });
    i18n.changeLanguage(id);
  };

  const mappingLang = (lang) => (
    <img
      onClick={changeLang(lang.id)}
      key={lang.id}
      className={!lang.active ? "lang notActive" : "lang"}
      src={lang.src}
      alt={lang.alt}
    />
  );

  const setScrollClassName = () => {
    if (pathname !== "/") {
      return "inScroll hundred";
    }
    let className = undefined;
    if (inScroll) {
      className = "inScroll";
    }
    if (hundredScroll) {
      className = "inScroll hundred";
    }
    return className;
  };

  const handleHamburgerMenu = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  return (
    <>
      {width > 767 ? (
        <header className={setScrollClassName()}>
          <nav>
            <img className="logo" src={logoMabrouk} alt="logo mabrouk" />
            <ul>{links.map(mappingLinks)}</ul>
          </nav>
          <section>{langs.map(mappingLang)}</section>
        </header>
      ) : (
        <>
          <header className={setScrollClassName()}>
            <nav>
              <ion-icon
                onClick={handleHamburgerMenu}
                className="hamburger_menu"
                name="menu-outline"
              ></ion-icon>
              <section>{langs.map(mappingLang)}</section>
            </nav>
            {isDropdownOpened && (
              <section className="dropdown_menu">
                <div style={{ display: "flex" }}>
                  <div className="separator"></div>
                  <ion-icon
                    onClick={handleHamburgerMenu}
                    className="close_hamburger_menu"
                    name="close-circle-outline"
                  ></ion-icon>
                </div>
                <ul>{links.map(mappingLinks)}</ul>
              </section>
            )}
          </header>
        </>
      )}
    </>
  );
};

export default Header;
