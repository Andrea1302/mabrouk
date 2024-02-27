import { useState, useEffect, Fragment } from "react";

//translation
import { useTranslation } from "react-i18next";

//Components
import Button from "../ui/button/Button";

//Style
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
      const newsentences = changeActivePhrase(sentences, 1);
      setSentences(newsentences);
    }, 1000); // visualizza la frase "Solo fresco" dopo 2 secondi

    const timeout2 = setTimeout(() => {
      const newsentences = changeActivePhrase(sentences, 2);
      setSentences(newsentences);
    }, 2000);

    const timeout3 = setTimeout(() => {
      const newsentences = changeActivePhrase(sentences, 3);
      setSentences(newsentences);
    }, 3000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

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
