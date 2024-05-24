import styles from "./style.module.scss";
import Image from "next/image";


interface IndustriesTeem {
    id: number;
    name: string;
    caption: string;
    imageUrl: string;
}

interface Props {
    data: IndustriesTeem[];
}

const Meet = ({data}: Props) => {
    return (
        <section className={styles.meet}>
            <div className={styles.meet_container}>
                <h2 className={`${styles.meet_title} h1-big`}>Meet our team</h2>
                <div className={styles.meet_blocks}>
                    {data.map((i, index) => (
                        <div className={styles.meet_block}>
                            <div className={styles.meet_block_name}>{i.name}</div>
                            <div className={styles.meet_block_caption}>{i.caption}</div>
                            <Image className={styles.meet_block_img} src={i.imageUrl} alt={'avatar'} width={207} height={134} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Meet;