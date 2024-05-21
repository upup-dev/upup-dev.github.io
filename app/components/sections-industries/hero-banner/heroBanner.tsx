import styles from "./style.module.scss";
import Btn from "@/app/components/btn/btn";
import Image from "next/image";

const HeroBanner = () => {
    return (
        <section className={`${styles.heroBanner} hero-banner`}>
            <div className={styles.container}>
                <div className={styles.heroBanner_left}>
                    <h1 className={`${styles.heroBanner_title} h1 title-dark`}>Fintech solutions, that excel</h1>
                    <div className={styles.heroBanner_bottomBlock}>
                        <p className={styles.heroBanner_text}>In the healthcare industry, the security and privacy of patient data are paramount. </p>
                        <div className={styles.heroBanner_tags}>
                            <div className={styles.heroBanner_tagItem}>
                                <div className={styles.heroBanner_tagTitle}>Platform:</div>
                                <a href={'/'} className={styles.heroBanner_tagLink}>Kontent.ai</a>
                            </div>
                            <div className={styles.heroBanner_tagItem}>
                                <div className={styles.heroBanner_tagTitle}>Services:</div>
                                <a href={'/'} className={styles.heroBanner_tagLink}>Websites</a>
                                <a href={'/'} className={styles.heroBanner_tagLink}>WebApp</a>
                            </div>
                            <div className={styles.heroBanner_tagItem}>
                                <div className={styles.heroBanner_tagTitle}>Industries:</div>
                                <a href={'/'} className={styles.heroBanner_tagLink}>Fintech</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.heroBanner_right}>
                    {/*<video*/}
                    {/*    width="100%"*/}
                    {/*    height="100%"*/}
                    {/*    preload="none"*/}
                    {/*    controls={false}*/}
                    {/*    muted={true}*/}
                    {/*    autoPlay={true}*/}
                    {/*    loop={true}*/}
                    {/*    playsInline*/}
                    {/*>*/}
                    {/*    <source src={'/video/fintech-v4_compres.mp4'}*/}
                    {/*            type="video/mp4"/>*/}
                    {/*    Your browser does not support the video tag.*/}
                    {/*</video>*/}
                    <Image src={'/images/industries/topBanner.png'} alt={'topBanner'} height={692} width={708} />
                </div>
            </div>
        </section>
    );
}
export default HeroBanner;