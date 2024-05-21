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
    const [isActive, setIsActive] = useState('');
    const { width } = useWindowSize();
    const toggleMobMenu = () => {
        if(!isOpen) {
            setIsOpen(true);
            setIsActive('active')
        } else {
            setIsOpen(false);
            setIsActive('inactive')
        }
    }


    return (
        <header className={styles.header}>
            <div className={styles.header_wrapper}>
                <Link className={styles.header_logo} href="/">
                    <Image src='/images/logo.svg' alt='UpUp' width={118} height={46} priority/>
                </Link>
                {width && width <= 1024 ? (
                        <>
                            <button onClick={toggleMobMenu} className={`${styles.header_mobMenu} ${styles[isActive]}`}>Menu</button>
                            {isOpen && <NavbarMob/>}
                        </>
                    ) : (
                    <Navbar/>
                )}
                <Link className={styles.header_btn} href="/public"><span>Contact Us</span>
                    <svg className={styles.header_btnIcon} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="PaperPlane">
                            <path id="Vector 5" d="M9 2L16.5 15L9 12.5L1.5 15L9 2Z" stroke="#13141F" strokeWidth="1.5"
                                  strokeLinejoin="bevel"/>
                        </g>
                    </svg>
                </Link>
            </div>
        </header>
    )
        ;
}

export default Header;
