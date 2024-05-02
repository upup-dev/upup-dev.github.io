import styles from "./style.module.scss";
import ScrollText from "@/app/components/scroll-text/scroll-text";

const OurApproach = () => {
    const text = 'Meet your the most devoted fan and business partner. Starting with profound understanding\n' +
        '            of your goals, audience and problems you solve, we deliver solutions destined to grow your project.';
    return (
        <section className={styles.ourApproach}>
            <div className={styles.ourApproach_container}>
                <div className={styles.ourApproach_leftBlock}>
                    Our Approach
                </div>
                <div className={styles.ourApproach_rightBlock}>
                    <ScrollText text={text} />
                </div>
            </div>

        </section>
    );
}

export default OurApproach;