import styles from "./style.module.scss";
import ScrollText from "@/app/components/scroll-text/scroll-text";

interface IndustriesProof {
    text: string;
}

interface Props {
    data: IndustriesProof[];
}
const SalesSection = ({data}: Props) => {
    const text = data.map(i => i.text).join();
    return (
        <section className={styles.ourApproach}>
            <div className={styles.ourApproach_container}>
                <div className={styles.ourApproach_leftBlock}></div>
                <div className={styles.ourApproach_rightBlock}>
                    <ScrollText text={text} />
                </div>
            </div>

        </section>
    );
}

export default SalesSection;