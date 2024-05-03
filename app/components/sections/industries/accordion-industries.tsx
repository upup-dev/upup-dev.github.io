"use client"

import {Accordion, AccordionItem} from "@nextui-org/react";
import styles from "@/app/components/navbarMob/style.module.scss";
import Link from "next/link";
import {industriesSlider} from "@/app/data/DataHomePage";
import Btn from "@/app/components/btn/btn";
import Image from "next/image";

const AccordionIndustries = () => {
    const imgDown = '/images/arrowIndastries.svg';
    const imgUp = '/images/errowIndustriesUp.svg';
    const itemClasses = {
        base: "mob-industries",
        title: "mob-industries_title",
        trigger: "mob-industries_trigger",
        indicator: "mob-industries_indicator",
        content: "mob-industries_content",
    };
    return (
        <>
            <Accordion
                showDivider={false}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            height: "auto",
                            transition: {
                                height: {
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                    duration: 1,
                                },
                                opacity: {
                                    easings: "ease",
                                    duration: 1,
                                },
                            },
                        },
                        exit: {
                            y: -10,
                            opacity: 0,
                            height: 0,
                            transition: {
                                height: {
                                    easings: "ease",
                                    duration: 0.25,
                                },
                                opacity: {
                                    easings: "ease",
                                    duration: 0.3,
                                },
                            },
                        },
                    },
                }}
                itemClasses={itemClasses}
                defaultSelectedKeys={'1'}>
                {industriesSlider.map((i, index) => (
                    <AccordionItem
                        key={index}
                        aria-label={i.industriesName}
                        title={i.industriesName}
                        indicator={({isOpen}) => (!isOpen ? <Image src={imgDown} alt='down' width={21} height={21} /> : <Image src={imgUp} alt='up' width={21} height={21} />)}>
                        <div className='contant-wrapper'>
                            <video width="100%" height="100%" preload="none" autoPlay={true} muted={true}>
                                <source src={i.urlVideo}
                                        type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            <h4 className='title'>{i.title}</h4>
                            <div className='swiper-wrap-tag'>
                                {i.tags.map((i, index) => (
                                    <div key={index} className='swiper-tag'>
                                        <div className='swiper-tag-title'>{i.nameLine}</div>
                                        <Link href={i.url}>{i.projectName}</Link>
                                    </div>
                                ))}
                            </div>
                            <div className='btn-more'>
                                <Btn name={'SEE MORE'} color={'#FFF'} white={true} fontSize={'font-32px'} url={i.url}/>
                            </div>
                        </div>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default AccordionIndustries;
