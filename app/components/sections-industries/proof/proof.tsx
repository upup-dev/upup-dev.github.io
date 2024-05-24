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
                <h2 className={`${styles.proof_title} h1-big`}>{data.map(i => i.title)}</h2>
                <div className={styles.proof_caption}>{data.map(i => i.caption)}</div>
                <div className={styles.proof_wrapper}>
                    {data.filter(i => i.portfolioItem).map(({portfolioItem}) => (
                        portfolioItem.map(i => (
                            <Link href={'/'} className={styles.proof_portfolio_item} key={i.id}>
                                <Image src={i.url} alt={'pic'} width={670} height={538}/>
                                <h3 className={styles.proof_portfolio_title}>{i.title}</h3>
                                <span className={styles.proof_portfolio_description}>{i.description}</span>
                            </Link>
                        ))
                    ))}
                </div>
            </div>
            <Link className={styles.proof_btn} href={'/'}>{data.map(i => i.btnName)}<Image src={'/images/ArrowRight.svg'} alt={'arrow-right'} height={22} width={22} /> </Link>
        </section>
    );
}
export default Proof;