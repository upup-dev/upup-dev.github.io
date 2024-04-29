"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import Navbar from "@/app/components/navbar/Navbar";
import NavbarMob from "@/app/components/navbarMob/NavbarMob";
import useWindowSize from "@/app/hooks/useWindowsSize";

const Header = () => {
    const { width } = useWindowSize();
    return (
        <header className={styles.header}>
            <div className={styles.header_wrapper}>
                <a className={styles.header_logo} href="">
                    <Image src='/images/logo.svg' alt='UpUp' width={118} height={46} priority/>
                </a>
                {width && width < 1024 ? (
                        <>
                            <button className={styles.header_mobMenu}>Menu</button>
                            <NavbarMob/>
                        </>
                    ) : (
                    <Navbar/>
                )}
                <a className={styles.header_btn} href="/public"><span>Contacts</span> <Image
                    src='/images/PaperPlane.svg'
                    alt='icon' width={18}
                    height={18}/></a>
            </div>
        </header>
    )
        ;
}

export default Header;
