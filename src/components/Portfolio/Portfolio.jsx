import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
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

export const Portfolio = () => {
  const sliderRef = useRef(null);

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
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section>
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
            <div className={styles.slide}>
              <img src={portfolio1} alt="Маникюр" />
            </div>
            <div className={styles.slide}>
              <img src={portfolio2} alt="Маникюр" />
            </div>
            <div className={styles.slide}>
              <img src={portfolio3} alt="Маникюр" />
            </div>
            <div className={styles.slide}>
              <img src={portfolio4} alt="Маникюр" />
            </div>
            <div className={styles.slide}>
              <img src={portfolio5} alt="Маникюр" />
            </div>
            <div className={styles.slide}>
              <img src={portfolio6} alt="Педикюр" />
            </div>
            <div className={styles.slide}>
              <img src={portfolio7} alt="Маникюр" />
            </div>
            <div className={styles.slide}>
              <img src={portfolio8} alt="Маникюр" />
            </div>
            <div className={styles.slide}>
              <img src={portfolio9} alt="Маникюр" />
            </div>
            <div className={styles.slide}>
              <img src={portfolio10} alt="Педикюр" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
