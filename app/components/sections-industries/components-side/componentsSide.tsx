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
                <h2 className={`${styles.componentsSide_title} h1-big`}>
                    {data.map(i => i.title).join(', ')}
                </h2>
                <div className={styles.componentsSide_blockWrapper}>
                    <div className={styles.componentsSide_emptybox}></div>
                    {data.filter(item => item.components && item.components.length > 0).map(({components}) => (
                        components.map(component => (
                            <div key={component.id} className={styles.componentsSide_block}>
                                <div className={styles.componentsSide_blockNumber}>
                                    [0{component.id + 1}]
                                </div>
                                <h3 className={styles.componentsSide_blockTitle}>{component.title}</h3>
                                <p className={styles.componentsSide_blockDescription}>{component.description}</p>
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ComponentsSide;