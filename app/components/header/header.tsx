import styles from "./style.module.scss";
import Image from "next/image";
import Navbar from "@/app/components/navbar/Navbar";
// import {useState} from "react";

const Header = () => {
    // const [openMenu, setOpenMenu] = useState<boolean>(false);
    return (
        <header className={styles.header}>
            <nav className={styles.header_wrapper}>
                <a className={styles.header_logo} href="">
                    <Image src='/images/logo.svg' alt='UpUp' width={118} height={46} priority/>
                </a>
                <Navbar/>
                <a className={styles.header_btn} href="/public"><span>Contacts</span> <Image
                    src='/images/PaperPlane.svg'
                    alt='icon' width={18}
                    height={18}/></a>
            </nav>
        </header>
    )
        ;
}

export default Header;
