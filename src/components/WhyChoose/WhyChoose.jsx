import React from "react";
import styles from "./WhyChoose.module.css";
import logo1 from "../../assets/icons/whychoose-icons/whychooseme-icon1.png";


export const WhyChoose = () => {
    return (
        <section>
            <div className="container">
                <h2>Почему выбирают меня?</h2>
                    <div className={styles.cardsWrapper}>
                        <div className={styles.card}>
                            <img src={logo1} alt="Логотип индивидуальный подход" />
                            <h3 className={styles.whyChooseTitle}>Индивидуальный подход:</h3>
                            <p>подбор процедур с учётом особенностей ваших ногтей и личных предпочтений.</p>
                        </div> 
                        <div className={styles.card}>
                            <img src={logo1} alt="Логотип индивидуальный подход" />
                            <h3 className={styles.whyChooseTitle}>Индивидуальный подход:</h3>
                            <p>подбор процедур с учётом особенностей ваших ногтей и личных предпочтений.</p>
                        </div>
                        <div className={styles.card}>
                            <img src={logo1} alt="Логотип индивидуальный подход" />
                            <h3 className={styles.whyChooseTitle}>Индивидуальный подход:</h3>
                            <p>подбор процедур с учётом особенностей ваших ногтей и личных предпочтений.</p>
                        </div>
                        <div className={styles.card}>
                            <img src={logo1} alt="Логотип индивидуальный подход" />
                            <h3 className={styles.whyChooseTitle}>Индивидуальный подход:</h3>
                            <p>подбор процедур с учётом особенностей ваших ногтей и личных предпочтений.</p>
                        </div>
                        <div className={styles.card}>
                            <img src={logo1} alt="Логотип индивидуальный подход" />
                            <h3 className={styles.whyChooseTitle}>Индивидуальный подход:</h3>
                            <p>подбор процедур с учётом особенностей ваших ногтей и личных предпочтений.</p>
                        </div>
                        <div className={styles.card}>
                            <img src={logo1} alt="Логотип индивидуальный подход" />
                            <h3 className={styles.whyChooseTitle}>Индивидуальный подход:</h3>
                            <p>подбор процедур с учётом особенностей ваших ногтей и личных предпочтений.</p>
                        </div> 
                    </div>
            </div>
        </section>
    )
}