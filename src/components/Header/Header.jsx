import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo/logo-light.png";

const Header = () => {
  const menuItems = ["Обо мне", "Прайс", "Портфолио", "Материалы", "Стерилизация", "Контакты"];

  return (
    <header className={styles.header}>
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
    </header>
  );
};

export default Header;
