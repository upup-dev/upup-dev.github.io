"use client"
import styles from "./style.module.scss";
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useEffect, useRef, useState} from 'react';
import {EffectFade, Navigation, Pagination} from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import Btn from "@/app/components/btn/btn";

const slideNames = ["Fintech", "Healthcare", "Productivity", "E-commerce"];

const SliderIndustries = () => {
    // Use SwiperClass for the correct type
    const swiperRef = useRef<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const goToSlide = (index: number) => {
        swiperRef.current?.slideTo(index);
    };
    useEffect(() => {
        // Access the Swiper instance and manipulate the video element
        const swiper = swiperRef.current;
        if (swiper) {
            const slide = swiper.slides[activeIndex];
            const video = slide.querySelector('video');
            if (video) {
                if (swiper.activeIndex === activeIndex) {
                    video.currentTime = 0;  // Reset video to start
                    video.play();           // Play the video
                } else {
                    video.pause();          // Pause other videos
                }
            }
        }
    }, [activeIndex]);


    return (
        <>
            <div className={styles.industries_controlsWrapper}>
                <h3 className={styles.industries_title}>Industries</h3>
                <div className={styles.industries_wrapBtn}>
                    {slideNames.map((name, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`${styles.industries_btn} ${activeIndex === index ? styles.active : ""}`}
                        >
                            <Image src='/images/arrow-slider.svg' alt='>' width={20} height={27}/>
                            <span>{name}</span>
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
                    modules={[Navigation, Pagination, EffectFade]}  // Make sure to include modules you might use
                    onSwiper={(swiper) => swiperRef.current = swiper}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    slidesPerView={1}
                    initialSlide={1}
                >
                    <SwiperSlide>
                        <div>
                            <video width="100%" height="100%" preload="none" autoPlay={true} muted={true}>
                                <source src="https://d3vlq52qrgdnc2.cloudfront.net/bg-project-kinetik.mp4"
                                        type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            <h4 className={styles.industries_swiperTitle}>Extra layer of security and reliability in
                                your health tech application.</h4>
                            <div className={styles.industries_swiperWrapTag}>
                                <div className={styles.industries_swiperTag}>
                                    <div className={styles.industries_swiperTagTitle}>Services:</div>
                                    <Link href={'/websites'}>Websites</Link>
                                </div>
                                <div className={styles.industries_swiperTag}>
                                    <div className={styles.industries_swiperTagTitle}>Industries:</div>
                                    <Link href={'/health'}>Health</Link>
                                </div>
                            </div>
                            <div className={styles.industries_btnMore}>
                                <Btn name={'SEE MORE'} color={'#FFF'} white={true} fontSize={'font-32px'}/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <video width="100%" height="100%" preload="none" autoPlay={true} muted={true}>
                            <source src="https://d3vlq52qrgdnc2.cloudfront.net/bg-project-Mighty-Buildings.mp4"
                                    type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <h4 className={styles.industries_swiperTitle}>Extra layer of security and reliability in your
                            health tech application.</h4>
                        <div className={styles.industries_swiperWrapTag}>
                            <div className={styles.industries_swiperTag}>
                                <div className={styles.industries_swiperTagTitle}>Services:</div>
                                <Link href={'/websites'}>Websites</Link>
                            </div>
                            <div className={styles.industries_swiperTag}>
                                <div className={styles.industries_swiperTagTitle}>Industries:</div>
                                <Link href={'/health'}>Health</Link>
                            </div>
                        </div>
                        <div className={styles.industries_btnMore}>
                            <Btn name={'SEE MORE'} color={'#FFF'} white={true} fontSize={'font-32px'}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <video width="100%" height="100%" preload="none" autoPlay={true} muted={true}>
                            <source src="https://d3vlq52qrgdnc2.cloudfront.net/bg-project-kinetik.mp4"
                                    type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <h4 className={styles.industries_swiperTitle}>Extra layer of security and reliability in your
                            health tech application.</h4>
                        <div className={styles.industries_swiperWrapTag}>
                            <div className={styles.industries_swiperTag}>
                                <div className={styles.industries_swiperTagTitle}>Services:</div>
                                <Link href={'/websites'}>Productivity</Link>
                            </div>
                            <div className={styles.industries_swiperTag}>
                                <div className={styles.industries_swiperTagTitle}>Industries:</div>
                                <Link href={'/health'}>Fintech</Link>
                            </div>
                        </div>
                        <div className={styles.industries_btnMore}>
                            <Btn name={'SEE MORE'} color={'#FFF'} white={true} fontSize={'font-32px'}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <video width="100%" height="100%" preload="none" autoPlay={true} muted={true}>
                            <source src="https://d3vlq52qrgdnc2.cloudfront.net/bg-project-Mighty-Buildings.mp4"
                                    type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <h4 className={styles.industries_swiperTitle}>Extra layer of security and reliability in your
                            health tech application.</h4>
                        <div className={styles.industries_swiperWrapTag}>
                            <div className={styles.industries_swiperTag}>
                                <div className={styles.industries_swiperTagTitle}>Services:</div>
                                <Link href={'/websites'}>Websites</Link>
                            </div>
                            <div className={styles.industries_swiperTag}>
                                <div className={styles.industries_swiperTagTitle}>Industries:</div>
                                <Link href={'/health'}>Health</Link>
                            </div>
                        </div>
                        <div className={styles.industries_btnMore}>
                            <Btn name={'SEE MORE'} color={'#FFF'} white={true} fontSize={'font-32px'}/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default SliderIndustries;
