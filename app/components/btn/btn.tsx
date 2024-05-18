import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Props {
    color: string;
    name: string;
    white: boolean;
    fontSize: string;
    url: string;
    type: string;
}

const Btn = ({name, color, white, fontSize, url, type }: Props) => {
    return (
        <div className='btn-more'>
            <div className={`${styles.btn}`}>
                {type !== 'submit' ? (<Link className={`${styles.link} ${fontSize}`} style={{color: color}} href={url}>
                    <span>{name}</span>
                    <Image src={white ? '/images/ArrowUpRight.svg' : '/images/ArrowUpRightDark.svg'} alt={'arrow'}
                           width={36} height={36}/>
                </Link>) : (<button className={`${styles.link} ${fontSize}`} style={{color: color}} type={'submit'}>
                <span>{name}</span>
                <Image src={white ? '/images/ArrowUpRight.svg' : '/images/ArrowUpRightDark.svg'} alt={'arrow'}
                       width={36} height={36}/>
            </button>
            )}
        </div>
</div>
)
    ;
}
export default Btn;