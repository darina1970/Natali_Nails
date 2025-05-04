import React from "react";
import styles from './About.module.css';

export const About = () => {
    return (
      <section className={styles.about}>
        <div className="container">
            <h1>Мой сайт</h1>
            <nav>
                <ul>
                    <li><a href="#home">Главная</a></li>
                    <li><a href="#about">Обо мне</a></li>
                    <li><a href="#portfolio">Портфолио</a></li>
                    <li><a href="#contacts">Контакты</a></li>
                </ul>
            </nav>
            <button>Записаться</button>
        </div>
      </section>
    );
  };