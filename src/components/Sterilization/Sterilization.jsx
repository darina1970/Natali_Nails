import React from "react";
import styles from "./Sterilization.module.css";
import sterilization from "../../assets/images/sterilization-img.webp";
import icon1 from "../../assets/icons/sterilization-icons/icon1.png";
import icon2 from "../../assets/icons/sterilization-icons/icon2.png";
import icon3 from "../../assets/icons/sterilization-icons/icon3.png";
import icon4 from "../../assets/icons/sterilization-icons/icon4.png";

const Sterilization = () => {
  return (
    <section>
      <div className="container">
        <h2>Стерилизация - мой главный приоритет</h2>
        <div className={styles.sterilization}>
          <p className={styles.sterilizationText}>
            Я строго соблюдаю санитарные нормы и использую профессиональное
            оборудование для стерилизации. Инструменты проходят полную обработку
            <span> в сухожаровом шкафу «Витязь ГП 10-3»</span> при температуре
            +170 °C.
          </p>
          <div className={styles.imageContainer}>
            <img
              src={sterilization}
              className={styles.sterilizationImage}
              alt="Сухожаровый шкаф"
            />
          </div>
        </div>
        <div>
          <h3 className={styles.sterilizationTitle}>
            Преимущества метода сухой тепловой обработки:
          </h3>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <img
                  src={icon1}
                  className={styles.cardIcon_icon}
                  alt="Иконка"
                />
                <p className={styles.cardDescription}>
                  <span>полное уничтожение микроогранизмов</span> без риска
                  химического загрязнения
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <img src={icon2} className={styles.cardIcon} alt="Иконка" />
                <p className={styles.cardDescription}>
                  <span>длительный срок сохранения</span> стерильных свойств
                  обработанных инструментов
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <img src={icon3} className={styles.cardIcon} alt="Иконка" />
                <p className={styles.cardDescription}>
                  <span>высокая эффективность</span> <br />и оперативность
                  процесса
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <img src={icon4} className={styles.cardIcon} alt="Иконка" />
                <p className={styles.cardDescription}>
                  <span>без риска </span>
                  <br /> коррозии и повреждений инструментов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sterilization;
