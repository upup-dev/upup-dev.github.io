import styles from "./style.module.scss";
import Image from "next/image";

interface Props {
    data: [{
        id: number,
        urlIcon: string
    }];
}

const Technologies = ({data}: Props) => {
    const iconColor = '#FF602E';
    return (
        <section className={`${styles.technologies} technologies`}>
            <div className={styles.technologies_container}>
                <h3 className={styles.technologies_title}>Technologies <span>and Platforms We</span> <span
                    className={styles.technologies_titleLastline}> Work With</span></h3>
                {data.map((i, index) => (
                    <div key={index} className={`${styles.technologies_techBlock} techBlock_n${index}`}>
                        <Image src={i.urlIcon} alt='figma' width={70} height={70}/>
                    </div>
                ))}
                <div className={styles.technologies_air}>

                </div>
                <div className={styles.technologies_airLast}>

                </div>

                <a href={'/'} className={styles.technologies_btn}>
                    <span className={styles.technologies_btnTextTop}>
                        {'Our projects\' details'}
                    </span>
                    <span className={styles.technologies_btnText}>
                        <span>Show more</span>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.875 28.125L25.875 10.125" stroke={iconColor} strokeWidth="3"
                                      strokeLinecap={'square'} strokeLinejoin="round"/>
                                <path d="M12.375 9H27V23.625" stroke={iconColor} strokeWidth="3" strokeLinecap="square"
                                      strokeLinejoin="round"/>
                            </svg>
                    </span>
                </a>
            </div>
        </section>
    );
}

export default Technologies;