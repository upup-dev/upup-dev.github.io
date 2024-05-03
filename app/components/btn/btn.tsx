import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Props {
    color: string;
    name: string;
    white: boolean;
    fontSize: string;
    url: string;
}

const Btn = ({name, color, white, fontSize, url }: Props) => {
    return (
        <div className={styles.btn}>
            <Link className={`${styles.link} ${fontSize}`} style={{color: color}} href={url}>
                <span>{name}</span>
                <Image src={white ? '/images/ArrowUpRight.svg' : '/images/ArrowUpRightDark.svg'} alt={'arrow'} width={36} height={36}/>
            </Link>
        </div>
    );
}
export default Btn;