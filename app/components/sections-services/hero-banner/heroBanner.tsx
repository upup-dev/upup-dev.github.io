'use client'

import styles from "./style.module.scss";
import Btn from "@/app/components/btn/btn";
import Image from "next/image";
import React, {useState} from "react";

interface ServicesWebsitesHeroBanner {
    title: string;
    caption: string;
}

interface Props {
    data: ServicesWebsitesHeroBanner[];
}

const listImgs = [
    {
        url: '/images/services/picb1.jpg'
    },
    {
        url: '/images/services/picb2.jpg'
    },
    {
        url: '/images/services/picb3.jpg'
    },
    {
        url: '/images/services/picb4.jpg'
    },
    {
        url: '/images/services/picb5.jpg'
    },
    {
        url: '/images/services/picb6.jpg'
    },
]

const HeroBanner = ({data}: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <section className={`${styles.heroBanner} hero-banner`}>
            <div className={styles.container}>
                <div className={styles.heroBanner_left}>
                    <h1 className={`${styles.heroBanner_title} h1-big title-dark`}>{data.map(i => i.title)}</h1>
                    <div className={styles.heroBanner_bottomBlock}>
                        <p className={styles.heroBanner_text}>{data.map(i => i.caption)}</p>
                        <Btn name={'LET’S TALK'} color={'#13141F'} white={true} fontSize={'font-32px'} url={'/contact-us'} type={'link'}/>
                    </div>
                </div>
                <div className={styles.heroBanner_right}>
                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={styles.heroBanner_right_wrap}>
                        <div className={styles.heroBanner_right_slider}>
                            {listImgs.map((i, index) => (
                                <Image key={index} src={i.url} alt={'pic'} width={220} height={165}
                                       className={styles.heroBanner_right_slide}/>
                            ))}
                        </div>
                        <div className={styles.heroBanner_right_slider2}>
                            {listImgs.toReversed().map((i, index) => (
                                <Image key={index} src={i.url} alt={'pic'} width={220} height={165}
                                       className={styles.heroBanner_right_slide}/>
                            ))}
                        </div>
                    </div>
                    <div className={styles.heroBanner_right_rotateBlock}>
                        <div className={styles.heroBanner_right_rotateBlockText}>WEBSITE DESIGN</div>
                        <div className={styles.heroBanner_right_rotateBlockDark}>
                            <div className={styles.heroBanner_right_rotateBlockText}>WEB DEVELOPMENT</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroBanner;