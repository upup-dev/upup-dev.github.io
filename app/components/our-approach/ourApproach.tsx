import styles from "./style.module.scss";

const OurApproach = () => {
    return (
        <section className={styles.ourApproach}>
            <div className={styles.ourApproach_container}>
                <div className={styles.ourApproach_leftBlock}>
                    Our Approach
                </div>
                <div className={styles.ourApproach_rightBlock}>
                    <p className={styles.ourApproach_Text}>Meet your the most devoted fan and business partner. Starting with profound understanding of your goals, audience and problems you solve, we deliver solutions destined to grow your project.</p>
                </div>
            </div>
        </section>
    );
}

export default OurApproach;