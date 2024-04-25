import styles from "./style.module.scss";
import Btn from "@/app/components/btn/btn";
import Image from "next/image";

const HeroBanner = () => {
    return (
        <section className={styles.heroBanner}>
            <div className={styles.container}>
                <div className={styles.heroBanner_left}>
                    <h1 className={`${styles.heroBanner_title} h1 title-dark`}>Dedicated to Success, Driven by
                        Innovation:
                        We Are UpUp</h1>
                    <div className={styles.heroBanner_bottomBlock}>
                        <p className={styles.heroBanner_text}>Exceeding expectation in every aspect, from communication
                            to delivery</p>
                        <Btn name={'LET’S TALK'} color={'#13141F'} white={true} fontSize={'font-32px'}/>
                    </div>
                </div>
                <div className={styles.heroBanner_right}>
                    <Image src={'/images/picHeroBanner.jpg'} alt={'pic'} width={598} height={692}/>
                </div>
            </div>

        </section>
);
}
export default HeroBanner;