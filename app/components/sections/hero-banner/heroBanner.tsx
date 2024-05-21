import styles from "./style.module.scss";
import Btn from "@/app/components/btn/btn";
import Image from "next/image";

const HeroBanner = () => {
    return (
        <section className={`${styles.heroBanner} hero-banner`}>
            <div className={styles.container}>
                <div className={styles.heroBanner_left}>
                    <h1 className={`${styles.heroBanner_title} h1 title-dark`}>Dedicated to Success, Driven by
                        Innovation:
                        We Are UpUp</h1>
                    <div className={styles.heroBanner_bottomBlock}>
                        <p className={styles.heroBanner_text}>Exceeding expectation in every aspect, from communication
                            to delivery</p>
                        <Btn name={'LET’S TALK'} color={'#13141F'} white={true} fontSize={'font-32px'} url={'/contact-us'} type={'link'}/>
                    </div>
                </div>
                <div className={styles.heroBanner_right}>
                    <div className={styles.heroBanner_rightGroup}>
                        <div className={styles.heroBanner_rightVector}>
                            <Image src={'/images/hero-vector-orange.svg'} alt={'vector'} width={272} height={378} priority/>
                        </div>
                        <div className={styles.heroBanner_rightbottom}>
                            <h3>5 years</h3>
                            <p>of finding excellent tech solutions to complex business problems</p>
                        </div>
                    </div>
                    <Image className={styles.heroBanner_bgImages} src={'/images/picHeroBanner.jpg'} alt={'pic'} width={598} height={692} priority/>
                </div>
            </div>
        </section>
);
}
export default HeroBanner;