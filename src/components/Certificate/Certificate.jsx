import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails, Zoom, Fullscreen, Counter } from "yet-another-react-lightbox/plugins";
import 'yet-another-react-lightbox/styles.css';
import './lightbox-overrides.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import "yet-another-react-lightbox/plugins/counter.css";


import styles from '../Certificate/Certificate.module.css';

import certificate1 from '../../assets/images/certificate-items/certificate-img1.webp';
import certificate2 from '../../assets/images/certificate-items/certificate-img2.webp';
import certificate3 from '../../assets/images/certificate-items/certificate-img3.webp';
import certificate4 from '../../assets/images/certificate-items/certificate-img4.webp';
import certificate5 from '../../assets/images/certificate-items/certificate-img5.webp';
import certificate6 from '../../assets/images/certificate-items/certificate-img6.webp';

import arrowLeft from '../../assets/icons/arrows/arrow-left.svg';
import arrowRight from '../../assets/icons/arrows/arrow-right.svg';

const certificates = [
    { src: certificate1 },
    { src: certificate2 },
    { src: certificate3 },
    { src: certificate4 },
    { src: certificate5 },
    { src: certificate6 },
]

export const Certificate = () => {
    const sliderRef = useRef(null);
    const [lightboxOpen, setLightBoxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    
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
                    // centerMode: true,
                    // centerPadding: '20%',
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
                        {/* <div className={styles.slide}><img src={certificate1} alt="Сертификат мастера" /></div>
                        <div className={styles.slide}><img src={certificate2} alt="Сертификат мастера" /></div>
                        <div className={styles.slide}><img src={certificate3} alt="Сертификат мастера" /></div>
                        <div className={styles.slide}><img src={certificate4} alt="Сертификат мастера" /></div>
                        <div className={styles.slide}><img src={certificate5} alt="Сертификат мастера" /></div>
                        <div className={styles.slide}><img src={certificate6} alt="Сертификат мастера" /></div> */}
                        {certificates.map((item, index) => (
                            <div key={index} className={styles.slide} onClick={() => {setCurrentIndex(index); setLightBoxOpen(true);}}>
                                <img src={item.src} alt={`Сертификат ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                </div> 
            </div>

            <Lightbox 
                open={lightboxOpen}
                index={currentIndex}
                close={() => setLightBoxOpen(false)}
                slides={certificates}
                plugins={[Thumbnails, Zoom, Fullscreen, Counter]}
                thumbnails={{position: 'bottom', width: 100, height: 60}}
                zoom={{zoomInButton: true, zoomOutButton: true}}
            />
        </section>
    )
};

