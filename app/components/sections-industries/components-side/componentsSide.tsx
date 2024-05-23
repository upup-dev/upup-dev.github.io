import e from "express";
import styles from "./style.module.scss";

interface Components {
    id: number;
    title: string;
    description: string;
}

interface IndustriesComponentsSide {
    id: number;
    className: string,
    title: string;
    components: Components[];
}

interface Props {
    data: IndustriesComponentsSide[];
}

const ComponentsSide = ({data}: Props) => {

    return (
        <section className={styles.componentsSide}>
            <div className={styles.componentsSide_container}>
                <h2 className={`${styles.componentsSide_title} h1-big`}>{data.map(i => i.title)}</h2>
                <div className={styles.componentsSide_blockWrapper}>
                    <div className={styles.componentsSide_emptybox}></div>
                    {data.filter(item => item.components).map(({components}) => (
                        components?.map((i, index) => (
                            <div key={index} className={styles.componentsSide_block}>
                                <div className={styles.componentsSide_blockNumber}>
                                    [0{i.id + 1}]
                                </div>
                                <h3 className={styles.componentsSide_blockTitle}>{i.title}</h3>
                                <p className={styles.componentsSide_blockDescription}>{i.description}</p>
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ComponentsSide;