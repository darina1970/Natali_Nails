import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo/logo-light.png";
import masterPhoto from "../../assets/images/master-photo.webp";
import telegramIcon from "../../assets/icons/social-icons/tg-dark.png";
import instagramIcon from "../../assets/icons/social-icons/insta-dark.png";

const menuItems = ["Обо мне", "Прайс", "Портфолио", "Материалы", "Стерилизация", "Контакты"];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerMain}>
           <div className={styles.headerMainNav}>
              <div className={styles.logo}>
                <img src={logo} alt="Логотип" />
              </div>

              {/* 🔹 Обычное меню (только на десктопе) */}
              <nav className={styles.nav}>
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index}><a href="#">{item}</a></li>
                  ))}
                </ul>
              </nav>

              {/* 🔹 Бургер-меню (только на мобильных) */}
              <div 
                className={`${styles.burgerMenu} ${menuOpen ? styles.open : ""}`} 
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className={styles.burgerLine}></div>
                <div className={styles.burgerLine}></div>
                <div className={styles.burgerLine}></div>
              </div>
          </div>

          {/* 🔹 Выпадающее мобильное меню */}
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
                <button className={styles.button}>Записаться</button> 
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
              <img className={styles.headerImage} src={masterPhoto} alt="Портрет мастера" />
              <p className={styles.disclaimer}>*Социальная сеть Instagram запрещена на территории Беларуси</p>
            </div>
          </div>
        </div>
      </div>                   
    </header>
  );
};
