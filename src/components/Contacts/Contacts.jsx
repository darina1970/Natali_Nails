import React from "react";
import styles from "./Contacts.module.css";
import iconTg from "../../assets/icons/social-icons/tg-light.svg";
import iconInst from "../../assets/icons/social-icons/insta-light.svg";

export const Contacts = () => {
  return (
    <section id="contacts">
      <div className="container">
        <h2>Контакты</h2>
        <div className={styles.contactsContent}>
          <div className={styles.contactsMap}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=27.503288%2C53.871615&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjM4NjAzMDAwEkXQkdC10LvQsNGA0YPRgdGMLCDQnNGW0L3RgdC6LCDQp9GL0LPRg9C90LDRh9C90LDRjyDQstGD0LvRltGG0LAsIDMz0JAiCg29BtxBFYl8V0I%2C&z=16.85"
              allowFullScreen
              title="Yandex Map"
            ></iframe>
          </div>
          <div className={styles.adressBlock}>
            <div className={styles.adress}>
              <p className={styles.adressTitle}>Адрес:</p>
              <p className={styles.addressText}>
                г. Минск, ул. Железнодорожная 33А
              </p>
            </div>
            <div className={styles.socials}>
              <p className={styles.socialsTitle}>Связаться со мной:</p>
              <div className={styles.socialsIcons}>
                <a
                    className={styles.iconTg}
                    href="https://t.me/natulik2024"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={iconTg} alt="Telegram" />
                </a>
                <a
                  className={styles.iconInst}
                  href="https://www.instagram.com/_n.a.t.a.s.h.ka_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={iconInst} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
