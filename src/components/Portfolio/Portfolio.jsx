import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Lightbox from "yet-another-react-lightbox";
import {
  Thumbnails,
  Zoom,
  Fullscreen,
  Counter,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "./lightbox-overrides.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

import styles from "../Portfolio/Portfolio.module.css";

import portfolio1 from "../../assets/images/portfolio-items/portfolio-img1.webp";
import portfolio2 from "../../assets/images/portfolio-items/portfolio-img2.webp";
import portfolio3 from "../../assets/images/portfolio-items/portfolio-img3.webp";
import portfolio4 from "../../assets/images/portfolio-items/portfolio-img4.webp";
import portfolio5 from "../../assets/images/portfolio-items/portfolio-img5.webp";
import portfolio6 from "../../assets/images/portfolio-items/portfolio-img6.webp";
import portfolio7 from "../../assets/images/portfolio-items/portfolio-img7.webp";
import portfolio8 from "../../assets/images/portfolio-items/portfolio-img8.webp";
import portfolio9 from "../../assets/images/portfolio-items/portfolio-img9.webp";
import portfolio10 from "../../assets/images/portfolio-items/portfolio-img10.webp";

import arrowLeft from "../../assets/icons/arrows/arrow-left.svg";
import arrowRight from "../../assets/icons/arrows/arrow-right.svg";

const portfolios = [
  { src: portfolio1 },
  { src: portfolio2 },
  { src: portfolio3 },
  { src: portfolio4 },
  { src: portfolio5 },
  { src: portfolio6 },
  { src: portfolio7 },
  { src: portfolio8 },
  { src: portfolio9 },
  { src: portfolio10 },
];

export const Portfolio = () => {
  const sliderRef = useRef(null);
  const [lightboxOpen, setLightBoxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id="portfolio">
      <div className="container">
        <h2 className={styles.sliderTitle}>Вдохновляйтесь моим творчеством</h2>
        <div className={styles.sliderWrapper}>
          <div className={styles.customArrows}>
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className={styles.arrowLeftBtn}
            >
              <img src={arrowLeft} alt="Стрелка влево" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className={styles.arrowRightBtn}
            >
              <img src={arrowRight} alt="Стрелка вправо" />
            </button>
          </div>

          <Slider ref={sliderRef} {...settings}>
            {portfolios.map((item, index) => (
              <div
                key={index}
                className={styles.slide}
                onClick={() => {
                  setCurrentIndex(index);
                  setLightBoxOpen(true);
                }}
              >
                <img src={item.src} alt={`Маникюр ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        index={currentIndex}
        close={() => setLightBoxOpen(false)}
        slides={portfolios}
        plugins={[Thumbnails, Zoom, Fullscreen, Counter]}
        thumbnails={{ position: "bottom", width: 100, height: 60 }}
        zoom={{ zoomInButton: true, zoomOutButton: true }}
      />
    </section>
  );
};
