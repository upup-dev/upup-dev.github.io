import styles from "./style.module.scss";
import ScrollText from "@/app/components/scroll-text/scroll-text";

const Feedback = () => {
    const text = 'We strive to "walk in our clients\' shoes", ensuring our solutions and strategic direction resonate with their expectations, alleviate their pain points, and align with their vision.';
    const text2 = 'Sergiy B';
    return (
        <section className={`${styles.ourApproach} ${styles.services}`}>
            <div className={styles.ourApproach_container}>
                <div className={styles.ourApproach_leftBlock}>

                </div>
                <div className={styles.ourApproach_rightBlock}>
                    <ScrollText text={text} />
                    <ScrollText text={text2} />
                </div>
            </div>
        </section>
    );
}

export default Feedback;