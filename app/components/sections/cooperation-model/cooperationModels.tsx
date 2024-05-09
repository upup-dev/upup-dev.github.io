import styles from "./style.module.scss";
import {cooperationModelsData} from "@/app/data/DataHomePage";
import Image from "next/image";

const CooperationModels = () => {
    return (
        <section className={styles.cooperation}>
            <div className={styles.cooperation_head}>
                <div className={styles.cooperation_headWrap}>
                    <div className={styles.cooperation_containerHead}>
                        <h3 className={`${styles.cooperation_head_title} h1-big`}>Models of cooperation</h3>
                    </div>
                </div>
            </div>
            {cooperationModelsData.map((i, index) => (
                <div key={index} className={styles.cooperation_bodyItem}>
                    <a href={i.url} className={styles.cooperation_bodyItem_container}>
                        <div className={styles.cooperation_bodyTagWrapper}>
                            {i.tags?.map((tag, index) => (
                                <span key={index} className={styles.cooperation_tag}>
                                    {tag.tagName}
                                </span>
                            ))}
                        </div>
                        <div className={styles.cooperation_bodyNameWrapper}>
                            <h4>{i.modelsName}</h4>
                            <p>{i.modelDescription}</p>
                        </div>
                        <div className={styles.cooperation_bodyBtn}>
                            <span>Learn more</span>
                            {/*<Image src={} alt={}*/}
                        </div>
                    </a>
                </div>
            ))}
        </section>
    );
}

export default CooperationModels;