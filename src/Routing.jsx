import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

//Pages
import HomePage from "./pages/homepage/HomePage";
import Restaurant from "./pages/ristorante/Restaurant";
import Escursioni from "./pages/escursioni/Escursioni";

//routes
import routes from "./routes";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={routes.HOMEPAGE} element={<HomePage />} />
        <Route path={routes.RESTAURANT} element={<Restaurant />} />
        <Route path={routes.ESCURSIONI} element={<Escursioni />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
