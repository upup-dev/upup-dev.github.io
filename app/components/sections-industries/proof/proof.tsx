import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";


interface PortfolioItem {
    id: number;
    url: string;
    title: string;
    description: string;
}

interface IndustriesProof {
    id: number;
    className: string,
    title: string;
    caption: string;
    btnName: string;
    portfolioItem: PortfolioItem[];
}

interface Props {
    data: IndustriesProof[];
}

const Proof = ({data}: Props) => {
    return (
        <section className={styles.proof}>
            <div className={styles.proof_container}>
                <h2 className={`${styles.proof_title}`}>{data.map(i => i.title)}</h2>
                <div className={styles.proof_caption}>{data.map(i => i.caption)}</div>
                <div className={styles.proof_wrapper}>
                    {data.filter(i => i.portfolioItem).map(({portfolioItem}) => (
                        portfolioItem.map(i => (
                            <div key={i.id}>
                                <Image src={i.url} alt={'pic'} width={670} height={538}/>
                            </div>
                        ))
                    ))}
                </div>
                <Link href={'/'}>{data.map(i => i.btnName)}</Link>
            </div>
        </section>
    );
}
export default Proof;