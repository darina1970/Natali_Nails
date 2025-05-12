import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo/logo-light.svg";
import telegramIcon from "../../assets/icons/social-icons/tg-dark.svg";
import instagramIcon from "../../assets/icons/social-icons/insta-dark.svg";
import checkIcon from "../../assets/check-icon.svg";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    { label: "Обо мне", anchor: "about" },
    { label: "Прайс", anchor: "price" },
    { label: "Портфолио", anchor: "portfolio" },
    { label: "Стерилизация", anchor: "sterilization" },
    { label: "Контакты", anchor: "contacts" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest (`.${styles.mobileNav}`) && 
        !e.target.closest(`.${styles.burgerMenu}`)
      ) {
          setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

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
                  <li key={index}><a href={`#${item.anchor}`}>{item.label}</a></li>
                ))}
              </ul>
            </nav>
            
            <div
              className={`${styles.burgerMenu} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}>
              <div className={`${styles.burgerLine} ${menuOpen ? styles.line1 : ''}`}></div>
              <div className={`${styles.burgerLine} ${menuOpen ? styles.line2 : ''}`}></div>
              <div className={`${styles.burgerLine} ${menuOpen ? styles.line3 : ''}`}></div>
            </div>

            {menuOpen && (
              <div className={styles.overlay} onClick={() => setMenuOpen(false)}></div>
            )}

            <nav className={`${styles.mobileNav} ${menuOpen ? styles.show : ""}`}>
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}><a href={`#${item.anchor}`} onClick={() => setMenuOpen(false)}>{item.label}</a></li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={styles.headerMainContent}>
            <div className={styles.headerMainLeft}>
              <h1>ИДЕАЛЬНЫЙ МАНИКЮР СО СТОЙКИМ ПОКРЫТИЕМ</h1>
              <ul className={styles.benefitsList}>
              <li><img src={checkIcon} alt="" className={styles.checkIcon} /> Профессиональная работа</li>
              <li><img src={checkIcon} alt="" className={styles.checkIcon} /> Гарантия безопасности</li>
              <li><img src={checkIcon} alt="" className={styles.checkIcon} /> Современный подход</li>
              <li><img src={checkIcon} alt="" className={styles.checkIcon} /> Качественные материалы</li>
              </ul>
              <a href="https://t.me/natulik2024" className={styles.button} target="_blank" rel="noopener noreferrer">Записаться</a>
            </div>
            <div className={styles.headerMainRight}>

              <div className={styles.iconsContainer}>
                {/* <div className={styles.iconWrapper}> */}
                  <a className={styles.iconWrapper} href="https://t.me/natulik2024" target="_blank" rel="noopener noreferrer">
                    <img src={telegramIcon} alt="Telegram" className={styles.icon} />
                  </a>
                {/* </div> */}
                {/* <div className={styles.iconWrapper}> */}
                  <a className={styles.iconWrapper} href="https://www.instagram.com/_n.a.t.a.s.h.ka_/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" className={styles.icon} />
                  </a>
                {/* </div> */}
              </div>
              <img className={styles.headerImage} src="../../../src/assets/images/master-photo.webp" alt="" />
              <p className={styles.disclaimer}>*Социальная сеть Instagram запрещена на территории Беларуси</p>
            </div>
            <h1 className={styles.hiddenTitle}>ИДЕАЛЬНЫЙ МАНИКЮР СО СТОЙКИМ ПОКРЫТИЕМ</h1>
          </div>
        </div>
      </div>                   
    </header>
  );
};


