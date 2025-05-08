import React from "react";
import styles from "./Banner.module.css";
import Header from "../Header/Header";
import masterPhoto from "../../assets/images/master-photo.webp";
import telegramIcon from "../../assets/icons/social-icons/tg-dark.png";
import instagramIcon from "../../assets/icons/social-icons/insta-dark.png";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerLeft}>
        <Header />
        <div className={styles.bannerContent}>
          <h1>ИДЕАЛЬНЫЙ МАНИКЮР СО СТОЙКИМ ПОКРЫТИЕМ</h1>
          <p>Профессиональная работа с гарантией безопасности. Современный подход и качественные материалы.</p>
          <a href="#" className={styles.button}>Записаться</a>
        </div>
      </div>
      <div className={styles.bannerImage}>
         <div className={styles.iconsContainer}>
          <div className={styles.iconWrapper}>
          <img src={telegramIcon} alt="Telegram" className={styles.icon} />
          </div>
          <div className={styles.iconWrapper}>
          <img src={instagramIcon} alt="Instagram" className={styles.icon} />
        </div>
      </div>
        <img src={masterPhoto} alt="Портрет мастера маникюра" />
        <p className={styles.disclaimer}>*Социальная сеть Instagram запрещена на территории Беларуси</p>
      </div>
    </section>
  );
};

export default Banner;
