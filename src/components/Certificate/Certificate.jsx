import React, { useRef } from "react";
import Slider from 'react-slick';
import styles from '../Certificate/Certificate.module.css';
import certificate1 from '../../assets/images/certificate-items/certificate-img1.webp';
import certificate2 from '../../assets/images/certificate-items/certificate-img2.webp';
import certificate3 from '../../assets/images/certificate-items/certificate-img3.webp';
import certificate4 from '../../assets/images/certificate-items/certificate-img4.webp';
import certificate5 from '../../assets/images/certificate-items/certificate-img5.webp';
import certificate6 from '../../assets/images/certificate-items/certificate-img6.webp';
import arrowLeft from '../../assets/icons/arrows/arrow-left.png';
import arrowRight from '../../assets/icons/arrows/arrow-right.png';



export const Certificate = () => {
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipe: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    centerPadding: '20%',
                },
            },
        ],
    };


    return (
        <section>
            <div className="container">
                <h2 className={styles.sliderTitle}>Сертификаты</h2>
                <div className={styles.sliderWrapper}>
                    <div className={styles.customArrows}>
                        <button onClick={() => sliderRef.current?.slickPrev()} className={styles.arrowLeftBtn}><img src={arrowLeft} alt="Стрелка влево" /></button>
                        <button onClick={() => sliderRef.current?.slickNext()} className={styles.arrowRightBtn}><img src={arrowRight} alt="Стрелка вправо" /></button>
                    </div>
                    <Slider ref={sliderRef} {...settings}>
                        <div className={styles.slide}><img src={certificate1} alt="Сертификат мастера" /></div>
                        <div className={styles.slide}><img src={certificate2} alt="Сертификат мастера" /></div>
                        <div className={styles.slide}><img src={certificate3} alt="Сертификат мастера" /></div>
                        <div className={styles.slide}><img src={certificate4} alt="Сертификат мастера" /></div>
                        <div className={styles.slide}><img src={certificate5} alt="Сертификат мастера" /></div>
                        <div className={styles.slide}><img src={certificate6} alt="Сертификат мастера" /></div>
                    </Slider>
                </div> 
            </div>
        </section>

        
    )

};

