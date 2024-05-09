"use client"
import styles from "./style.module.scss";
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import {useEffect, useRef, useState} from 'react';
import {EffectFade, Navigation, Pagination} from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import Btn from "@/app/components/btn/btn";
import {industriesSlider} from "@/app/data/DataHomePage";

const SliderIndustries = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const goToSlide = (index: number) => {
        swiperRef.current?.slideTo(index);
    };
    useEffect(() => {
        const swiper = swiperRef.current;
        if (swiper) {
            const slide = swiper.slides[activeIndex];
            const video = slide.querySelector('video');
            if (video) {
                if (swiper.activeIndex === activeIndex) {
                    video.currentTime = 0;
                    video.play();
                } else {
                    video.pause();
                }
            }
        }
    }, [activeIndex]);


    return (
        <>
            <div className={styles.industries_controlsWrapper}>
                <h3 className={styles.industries_title}>Industries</h3>
                <div className={styles.industries_wrapBtn}>
                    {industriesSlider.map((i, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`${styles.industries_btn} ${activeIndex === index ? styles.active : ""}`}
                        >
                            <Image src='/images/arrow-slider.svg' alt='>' width={20} height={27}/>
                            <span>{i.industriesName}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles.industries_wrapslider}>
                <Swiper
                    style={{width: '100%'}}
                    className={styles.industries_swiperSlider}
                    effect="fade"
                    fadeEffect={{crossFade: true}}
                    modules={[Navigation, Pagination, EffectFade]}
                    onSwiper={(swiper) => swiperRef.current = swiper}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    slidesPerView={1}
                    initialSlide={1}
                >
                    {industriesSlider.map((i, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <video width="100%" height="100%" preload="none" loop={true} autoPlay={true} muted={true} >
                                    <source src={i.urlVideo}
                                            type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                                <h4 className={styles.industries_swiperTitle}>{i.title}</h4>
                                <div className={styles.industries_swiperWrapTag}>
                                    {i.tags.map((i, index) => (
                                        <div key={index} className={styles.industries_swiperTag}>
                                            <div className={styles.industries_swiperTagTitle}>{i.nameLine}</div>
                                            <Link href={i.url}>{i.projectName}</Link>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.industries_btnMore}>
                                    <Btn name={'SEE MORE'} color={'#FFF'} white={true} fontSize={'font-32px'} url={i.url}/>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default SliderIndustries;
