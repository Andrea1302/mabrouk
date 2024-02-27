import React, { useState, useEffect, Fragment } from "react";
import { useTranslation } from "react-i18next";
import Button from "../ui/button/Button";
import "./Slogan.scss";

const changeActivePhrase = (sentences, index) => {
  const copySentences = [...sentences];
  copySentences.forEach((frase, i) => {
    if (i === index) {
      frase.active = true;
    } else {
      frase.active = false;
    }
  });
  return copySentences;
};

function Slogan() {
  const { t } = useTranslation();
  const [sentences, setSentences] = useState([
    { text: "SOLO PESCE", active: true },
    { text: "SOLO FRESCO", active: false },
    { text: "SOLO LA SERA", active: false },
    { text: "MABROUK", active: false },
  ]);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setSentences((prevSentences) => changeActivePhrase(prevSentences, 1));
    }, 1000);

    const timeout2 = setTimeout(() => {
      setSentences((prevSentences) => changeActivePhrase(prevSentences, 2));
    }, 2000);

    const timeout3 = setTimeout(() => {
      setSentences((prevSentences) => changeActivePhrase(prevSentences, 3));
    }, 3000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []); // Aggiunto l'array delle dipendenze vuoto per risolvere il warning

  const discover = () => {
    const discoverContainer = document.querySelector(".container_discover");
    discoverContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const mappingFrasi = (sentence, index) => {
    if (sentence.active) {
      return (
        <Fragment key={sentence.text}>
          <div className="sentence">{sentence.text}</div>
          {index === sentences.length - 1 && (
            <Button onClick={discover} text={t("common.discoverMore")} />
          )}
        </Fragment>
      );
    }
  };

  return <>{sentences.map(mappingFrasi)}</>;
}

export default Slogan;
