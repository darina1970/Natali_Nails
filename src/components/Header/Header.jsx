<<<<<<< Updated upstream
=======
import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo/logo-light.png";
import telegramIcon from "../../assets/icons/social-icons/tg-dark.png";
import instagramIcon from "../../assets/icons/social-icons/insta-dark.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["Обо мне", "Прайс", "Портфолио", "Стерилизация", "Контакты"];

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
          
            <div
              className={`${styles.burgerMenu} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}>
              <div className={styles.burgerLine}></div>
              <div className={styles.burgerLine}></div>
              <div className={styles.burgerLine}></div>
            </div>

            <nav className={`${styles.mobileNav} ${menuOpen ? styles.show : ""}`}>
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}><a href="#">{item}</a></li>
                ))}
              </ul>
            </nav>
          </div>

          {menuOpen && (
            <nav className={styles.mobileNav}>
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}><a href="#">{item}</a></li>
                ))}
              </ul>
            </nav>
          )}

          <div className={styles.headerMainContent}>
            <div className={styles.headerMainLeft}>
              <h1>ИДЕАЛЬНЫЙ МАНИКЮР СО СТОЙКИМ ПОКРЫТИЕМ</h1>
              <p>Профессиональная работа с гарантией безопасности. Современный подход и качественные материалы.</p>
              <a href="#" className={styles.button}>Записаться</a>
            </div>
            <div className={styles.headerMainRight}>
              <div className={styles.iconsContainer}>
                <div className={styles.iconWrapper}>
                  <a href="https://t.me/natulik2024" target="_blank" rel="noopener noreferrer">
                    <img src={telegramIcon} alt="Telegram" className={styles.icon} />
                  </a>
                </div>
                <div className={styles.iconWrapper}>
                  <a href="https://www.instagram.com/_n.a.t.a.s.h.ka_/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" className={styles.icon} />
                  </a>
                </div>
              </div>
              <img className={styles.headerImage} src="../../../src/assets/images/master-photo.webp" alt="" />
              <p className={styles.disclaimer}>*Социальная сеть Instagram запрещена на территории Беларуси</p>
            </div>
          </div>
        </div>
      </div>                   
    </header>
  );
};


>>>>>>> Stashed changes
