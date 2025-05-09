import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo/logo-light.png";

const menuItems = ["Обо мне", "Прайс", "Портфолио", "Материалы", "Стерилизация", "Контакты"];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerMain}>
          <div className={styles.headerMainNav}>
              <div className={styles.logo}>
                <img src={logo} alt="Логотип" />
              </div>
              <nav className={styles.nav}>
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index}><a href="#">{item}</a></li>
                  ))}
                </ul>
              </nav>
          </div>
          <div className={styles.headerMainContent}>
            <div className={styles.headerMainLeft}>
                <h1>ИДЕАЛЬНЫЙ МАНИКЮР СО СТОЙКИМ ПОКРЫТИЕМ</h1>
                <p>Профессиональная работа с гарантией безопасности. Современный подход и качественные материалы.</p>
                <button className={styles.button}>Записаться</button> 
            </div>
            <div className={styles.headerMainRight}>
              <img className={styles.headerImage} src="../../../src/assets/images/master-photo.webp" alt="Портрет мастера" />
              <p className={styles.disclaimer}>*Социальная сеть Instagram запрещена на территории Беларуси</p>
            </div>
          </div>
        </div>
      </div>                   
    </header>
  );
};
