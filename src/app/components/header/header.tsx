import styles from "./style.module.scss";
import Image from "next/image";
// import {useState} from "react";

const Header = () => {
    // const [openMenu, setOpenMenu] = useState<boolean>(false);
    const basePath = process.env.NODE_ENV === 'production' ? '/upup.site-v2.0.github.io' : '';
    return (
        <header className={styles.header}>
            <div className={styles.header_wrapper}>
                <a className={styles.header_logo} href="">
                    <Image src={`${basePath}/images/logo.svg`} alt='UpUp' width={118} height={46}/>
                </a>
                <ul className={styles.header_navbar}>
                    <li><a href="">Industries <Image src={`${basePath}/images/CaretDown.svg`} alt='v' width={16} height={16}/></a></li>
                    <li><a href="">Services <Image src={`${basePath}/images/CaretDown.svg`} alt='v' width={16} height={16}/></a></li>
                    <li><a href="">Engagement Models <Image src={`${basePath}/images/CaretDown.svg`} alt='v' width={16} height={16}/></a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">About Us</a></li>
                </ul>
                <a className={styles.header_btn} href="/"><span>Contacts</span> <Image src={`${basePath}/images/PaperPlane.svg`}
                                                                                       alt='icon' width={18}
                                                                                       height={18}/></a>
            </div>
        </header>
    );
}

export default Header;
