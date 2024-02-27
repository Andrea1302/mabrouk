import { VerticalTimeline } from "react-vertical-timeline-component";

//Components
import HistorySection from "./HistorySection";

//Style
import "../Restaurant.scss";
//translations
import { useTranslation } from "react-i18next";

const Story = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("ristorante.storia.titolo")}</h2>
      <VerticalTimeline>
        <HistorySection
          date={"1996"}
          paragraph={t("ristorante.storia.primoParagrafo")}
          title={t("ristorante.storia.primoTitolo")}
        />
        <HistorySection
          date={"2012"}
          paragraph={t("ristorante.storia.secondoParagrafo")}
          title={t("ristorante.storia.secondoTitolo")}
        />
        <HistorySection
          date={"2022"}
          paragraph={t("ristorante.storia.terzoParagrafo")}
          title={t("ristorante.storia.terzoTitolo")}
        />
      </VerticalTimeline>
    </section>
  );
};

export default Story;
