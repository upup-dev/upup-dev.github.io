"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import Navbar from "@/app/components/navbar/Navbar";
import NavbarMob from "@/app/components/navbarMob/NavbarMob";
import useWindowSize from "@/app/hooks/useWindowsSize";
import Link from "next/link";
import {useState} from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { width } = useWindowSize();
    const toggleMobMenu = () => {
        if(!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }
    return (
        <header className={styles.header}>
            <div className={styles.header_wrapper}>
                <Link className={styles.header_logo} href="/">
                    <Image src='/images/logo.svg' alt='UpUp' width={118} height={46} priority/>
                </Link>
                {width && width < 1024 ? (
                        <>
                            <button onClick={toggleMobMenu} className={styles.header_mobMenu}>Menu</button>
                            {isOpen && <NavbarMob/>}
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
