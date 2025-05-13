import React from "react";
import styles from './About.module.css';
import aboutImage from '../../assets/images/about-img.webp';



export const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h2>Обо мне</h2>
                <div className={styles.contentWrapper}>
                    <div className={styles.imageWrapper}>
                        <img src={aboutImage} className={styles.aboutImage} alt="Nail master at work" />
                    </div>
                    <ul className={styles.benefitsList}>
                        <li>Я обеспечиваю эстетику ногтей, совмещая безопасность, качество и доступность.</li>
                        <li>В работе применяю стерильные инструменты и проверенные материалы премиум-класса.</li>
                        <li>Для каждого клиента разрабатываю индивидуальный подход, подбирая процедуры маникюра и педикюра с учетом состояния ногтей и пожеланий.</li>
                        <li>Моя цель — идеальный результат без компромиссов в уходе и здоровье.</li>
                    </ul>
                </div>
            </div>
        </section>
    )    
} 