//Components
import Container from "../../components/container/Container";
import Discover from "../../components/discover/Discover";
import Slogan from "../../components/slogan/Slogan";
import Gallery from "../../components/Gallery/Gallery";

//Style
import "./HomePage.scss";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  const location = useLocation();
  const moveTo = location?.state?.moveTo;
  useEffect(() => {
    if (moveTo) {
      const gallery = document.querySelector(moveTo);
      gallery.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  return (
    <>
      <section className="homepage_first_section">
        <Slogan />
      </section>
      <Container>
        <Discover />
      </Container>
      <Gallery />
    </>
  );
};

export default HomePage;
