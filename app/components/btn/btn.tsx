import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Props {
    color: string;
    name: string;
    white: boolean;
    fontSize: string;
}

const Btn = ({name, color, white, fontSize }: Props) => {
    return (
        <div className={styles.btn}>
            <Link className={`${styles.link} ${fontSize}`} style={{color: color}} href={'/'}>{name}</Link>
            <Image src={white ? '/images/ArrowUpRight.svg' : '/images/ArrowUpRightDark.svg'} alt={'arrow'} width={36} height={36}/>
        </div>
    );
}
export default Btn;