import styles from "./style.module.scss";
import ScrollText from "@/app/components/scroll-text/scroll-text";
import Btn from "@/app/components/btn/btn";

interface IndustriesSalesSection {
    id: number;
    className: string,
    caption: string;
    title: string;
    description1: string;
    description2: string;
    btnName: string;
    url: string;
}

interface Props {
    data: IndustriesSalesSection[];
}

const SalesSection = ({data}: Props) => {
    const description1 = data.map(i => i.description1).join();
    const description2 = data.map(i => i.description2).join();
    return (
        <section className={styles.salesSection}>
            <div className={styles.salesSection_containerTop}>
                <div className={styles.salesSection_caption}>{data.map(i => i.caption)}</div>
                <h2 className={`${styles.salesSection_title} h1`}>{data.map(i => i.title)}</h2>
            </div>
                <div className={styles.salesSection_container}>
                    <div className={styles.salesSection_leftBlock}>
                        {/*Our Approach*/}
                    </div>
                    <div className={styles.salesSection_rightBlock}>
                        <ScrollText text={description1}/>
                        <ScrollText text={description2}/>
                        <Btn name={'LET’S TALK'} color={'#13141F'} white={true} fontSize={'font-32px'} url={'/contact-us'} type={'link'}/>
                    </div>
                </div>

        </section>
);
}

export default SalesSection;