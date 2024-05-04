import styles from "./style.module.scss";
import {advantagesData} from "@/app/data/DataHomePage";

const OurAdvantages = () => {

    return (
        <section className={styles.ourAdvantages}>
            <div className={styles.ourAdvantages_container}>
                <h3 className={`${styles.ourAdvantages_title} h1-big`}>
                    Our advantages
                </h3>
                <div className={styles.ourAdvantages_blocks}>
                    {advantagesData.map((i, index) => (
                        <div className={styles.ourAdvantages_block} key={index}>
                            <div className={styles.ourAdvantages_blockNumber}>{i.number}</div>
                            <div className={styles.ourAdvantages_blockTitle}>{i.title}</div>
                            <div className={styles.ourAdvantages_blockDescription}>{i.description}</div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default OurAdvantages;