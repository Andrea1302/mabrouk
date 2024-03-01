import React, { useEffect, useRef, useState } from "react";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

//Style
import "./Gallery.scss";

//Images
import img1 from "../../assets/imgs/anto.jpg";
import img2 from "../../assets/imgs/aragosta.jpg";
import img3 from "../../assets/imgs/aragosta2.jpg";
import img4 from "../../assets/imgs/barca.jpeg";
import img5 from "../../assets/imgs/lob.jpg";
import img6 from "../../assets/imgs/lobster.jpg";
import { handleScrollAnimation } from "../../utils/animationUtils";
import { useTranslation } from "react-i18next";

const images = [
  { id: 1, src: img1, alt: "", active: true },
  { id: 2, src: img2, alt: "", active: false },
  { id: 3, src: img3, alt: "", active: false },
  { id: 4, src: img4, alt: "", active: false },
  { id: 5, src: img5, alt: "", active: false },
  { id: 6, src: img6, alt: "", active: false },
];

const Gallery = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRef = useRef();
  const swiperRef = useRef();

  useEffect(() => {
    const cleanup = handleScrollAnimation(cardRef, "animate_card");
    return cleanup;
  }, []);

  const mappingImages = (image) => {
    return (
      <SwiperSlide key={image.id}>
        <img
          className="gallery_img"
          key={image.id}
          src={image.src}
          alt={image.alt}
        />
      </SwiperSlide>
    );
  };

  const handleOnSetSwiper = (index) => () => {
    swiperRef.current.swiper.slideTo(index);
  };

  const renderDots = () => {
    return images.map((_, index) => (
      <div
        key={index}
        className={`dot ${index === activeIndex ? "active" : ""}`}
        onClick={handleOnSetSwiper(index)}
      />
    ));
  };

  return (
    <div id="gallery" ref={cardRef}>
      <h2>{t("gallery.titolo")}</h2>

      <div className="gallery_container">
        <Swiper
          ref={swiperRef}
          onSlideChange={(e) => setActiveIndex(e.activeIndex)}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          pagination={{
            clickable: true,
          }}
        >
          {images.map(mappingImages)}
        </Swiper>
        <div className="dots-container">{renderDots()}</div>
      </div>
    </div>
  );
};

export default Gallery;
