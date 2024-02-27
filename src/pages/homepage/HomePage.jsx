//Components
import Container from "../../components/container/Container";
import Discover from "../../components/discover/Discover";
import Slogan from "../../components/slogan/Slogan";

//Style
import "./HomePage.scss";

const HomePage = () => {
  return (
    <>
      <section className="homepage_first_section">
        <div className="overlay">
          <Slogan />
        </div>
      </section>
      <Container>
        <Discover />
      </Container>
    </>
  );
};

export default HomePage;
