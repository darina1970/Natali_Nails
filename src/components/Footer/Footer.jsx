import React from "react";
import styles from "./Footer.module.css";
import logoDark from "../../assets/logo/logo-dark.png";
import upIcon from "../../assets/icons/arrows/arrow-top.svg"; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <img src={logoDark} alt="Логотип Natali" className={styles.logo} />
        <nav className={styles.nav}>
          <ul>
            <li><a href="#about">Обo мне</a></li>
            <li><a href="#price">Прайс</a></li>
            <li><a href="#portfolio">Портфолио</a></li>
            <li><a href="#materials">Материалы</a></li>
            <li><a href="#sterilization">Стерилизация</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </nav>
        <button className={styles.scrollUp} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={upIcon} alt="Наверх" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
