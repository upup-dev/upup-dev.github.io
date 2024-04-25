import styles from "./style.module.scss";
import Image from "next/image";
// import {useState} from "react";

const Header = () => {
    // const [openMenu, setOpenMenu] = useState<boolean>(false);
    return (
        <header className={styles.header}>
            <div className={styles.header_wrapper}>
                <a className={styles.header_logo} href="">
                    <Image src='/images/logo.svg' alt='UpUp' width={118} height={46}/>
                </a>
                <ul className={styles.header_navbar}>
                    <li><a href="">Industries <Image src='/images/CaretDown.svg' alt='v' width={16} height={16}/></a></li>
                    <li><a href="">Services <Image src='/images/CaretDown.svg' alt='v' width={16} height={16}/></a></li>
                    <li><a href="">Engagement Models <Image src='/images/CaretDown.svg' alt='v' width={16} height={16}/></a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">About Us</a></li>
                </ul>
                <a className={styles.header_btn} href="/public"><span>Contacts</span> <Image src='/images/PaperPlane.svg'
                                                                                             alt='icon' width={18}
                                                                                             height={18}/></a>
            </div>
        </header>
    );
}

export default Header;
