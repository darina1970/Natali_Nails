import React from "react";
import styles from "./Price.module.css";
import priceImage1 from "../../assets/images/price-items/price-img1.webp";
import priceImage2 from "../../assets/images/price-items/price-img2.webp";

export const Price = () => {
  return (
    <section id="price">
      <div className="container">
        <h2>Прайс</h2>
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper}>
            <div className={styles.imageWrapper}>
              <img
                src={priceImage1}
                className={styles.priceImage}
                alt="Manicure"
              />
            </div>
            <div className={styles.priceListWrapper}>
              <ul className={styles.priceList}>
                <li>
                  <div className={styles.priceItem}>
                    <span>Маникюр без покрытия</span>
                    <span className={styles.price}>50 руб</span>
                  </div>
                </li>
                <li>
                  <div className={styles.priceItem}>
                    <span>Мужской маникюр</span>
                    <span className={styles.price}>60 руб</span>
                  </div>
                </li>
                <li>
                  <div className={styles.priceItem}>
                    <span>Маникюр с покрытием</span>
                    <span className={styles.price}>65 руб</span>
                  </div>
                </li>
                <li>
                  <div className={styles.priceItem}>
                    <span>Наращивание ногтей (короткие)</span>
                    <span className={styles.price}>70 руб</span>
                  </div>
                </li>
                <li>
                  <div className={styles.priceItem}>
                    <span>Наращивание ногтей (средние)</span>
                    <span className={styles.price}>75 руб</span>
                  </div>
                </li>
                <li>
                  <div className={styles.priceItem}>
                    <span>Наращивание ногтей (длинные)</span>
                    <span className={styles.price}>80 руб</span>
                  </div>
                </li>
              </ul>
              <a
                href="https://t.me/natulik2024"
                className={styles.button}
                target="_blank"
              >
                Записаться
              </a>
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.priceListWrapper}>
              <ul className={styles.priceList}>
                <li>
                  <div className={styles.priceItem}>
                    <span>Педикюр (стопы + пальцы)</span>
                    <span className={styles.price}>50 руб</span>
                  </div>
                </li>
                <li>
                  <div className={styles.priceItem}>
                    <span>Педикюр с покрытием (стопы + пальцы)</span>
                    <span className={styles.price}>60 руб</span>
                  </div>
                </li>
              </ul>
              <a
                href="https://t.me/natulik2024"
                className={styles.button}
                target="_blank"
              >
                Записаться
              </a>
            </div>
            <div className={styles.imageWrapper}>
              <img
                src={priceImage2}
                className={styles.priceImage}
                alt="Pedicure"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
