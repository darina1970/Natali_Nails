import React from "react";
import styles from "./WhyChoose.module.css";
import logo1 from "../../assets/icons/whychoose-icons/whychooseme-icon1.png";
import logo2 from "../../assets/icons/whychoose-icons/whychooseme-icon2.png";
import logo3 from "../../assets/icons/whychoose-icons/whychooseme-icon3.png";
import logo4 from "../../assets/icons/whychoose-icons/whychooseme-icon4.png";
import logo5 from "../../assets/icons/whychoose-icons/whychooseme-icon5.png";
import whyChooseImg from '../../assets/images/whyChooseMe-img.webp';


export const WhyChoose = () => {
    return (
        <section>
            <div className="container">
                <h2>Почему выбирают меня?</h2>
                    <div className={styles.cardsWrapper}>
                        <div className={styles.card}>
                            <div className={styles.logoWrapper}>                            
                                <img src={logo1} className={styles.logo} alt="Логотип индивидуальный подход" />
                            </div>
                            <div className={styles.cardText}>
                                <h3 className={styles.whyChooseTitle}>Индивидуальный подход:</h3>
                                <p>подбор процедур с учётом особенностей ваших ногтей и личных предпочтений.</p>
                            </div>
                        </div> 
                        <div className={styles.card}>
                            <div className={styles.logoWrapper}>                            
                                <img src={logo2} className={styles.logo} alt="Логотип Безупречная гигиена" />
                            </div>
                            <div className={styles.cardText}>
                                <h3 className={styles.whyChooseTitle}>Безупречная гигиена:</h3>
                                <p>каждый инструмент обрабатывается строго по стандартам, обеспечивая полную безопасность.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.logoWrapper}>                            
                                <img src={logo3} className={styles.logo} alt="Логотип Дизайн на любой вкус" />
                            </div>
                            <div className={styles.cardText}>
                                <h3 className={styles.whyChooseTitle}>Дизайн на любой вкус:</h3>
                                <p>классика, креативные решения, эксперименты с оттенками и декорирование.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.logoWrapper}>                            
                                <img src={logo4} className={styles.logo} alt="Логотип Лучшие материалы" />
                            </div>
                            <div className={styles.cardText}>
                                <h3 className={styles.whyChooseTitle}>Лучшие материалы:</h3>
                                <p>использую продукцию известных брендов, прошедшую сертификацию и проверку качества.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.logoWrapper}>                            
                                <img src={logo5} className={styles.logo} alt="Логотип Комфорт" />
                            </div>
                            <div className={styles.cardText}>
                                <h3 className={styles.whyChooseTitle}>Комфорт:</h3>
                                <p>каждое посещение приносит удовольствие, уверенность в себе и ухоженный вид ногтей, привлекающий внимание окружающих.</p>
                            </div>
                        </div>
                        <div className={styles.imageCard}>
                            <img src={whyChooseImg} className={styles.whyChooseImg} alt="Фото маникюра" />
                        </div> 
                    </div>
            </div>
        </section>
    )
}