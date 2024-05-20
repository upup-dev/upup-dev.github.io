import styles from "./style.module.scss";
import Link from "next/link";
import {Accordion, AccordionItem} from "@nextui-org/react";
import Image from "next/image";
import {navigation} from "@/app/data/DataNav";

const NavbarMob = () => {
    const itemClasses = {
        base: "mob-menu",
        title: "mob-menu_title",
        trigger: "mob-menu_trigger",
        indicator: "mob-menu_indicator",
        content: "mob-menu_content",
    };

    return (
        <nav className={`${styles.navbarMob} navbar_mob`}>
            <ul className={styles.navbarMob_items}>
                <Accordion
                    showDivider={false}
                    motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            height: "auto",
                            transition: {
                                height: {
                                    // type: "spring",
                                    // stiffness: 500,
                                    damping: 0,
                                    duration: .5,
                                },
                                opacity: {
                                    easings: "ease",
                                    duration: 1,
                                },
                            },
                        },
                        exit: {
                            y: -10,
                            opacity: 0,
                            height: 0,
                            transition: {
                                height: {
                                    easings: "ease",
                                    duration: 0.25,
                                },
                                opacity: {
                                    easings: "ease",
                                    duration: 0.3,
                                },
                            },
                        },
                    },
                }}
                           itemClasses={itemClasses}>
                    {navigation.filter(item => item.submenu).map(({id, title, submenu}) => (
                        <AccordionItem key={id} aria-label={title} title={title} indicator={({ isOpen }) => (!isOpen ?
                            <span className={styles.arrowDown}><span></span></span> :
                            <span className={styles.arrowUp}><span></span></span>)}>
                            <ul className={styles.navbarMob_submenu}>
                                {submenu?.map(({id, title, path}) => (
                                    <li key={id} className={styles.navbarMob_submenuItem}>
                                        <Link className={styles.navbarMob_submenuItemLink} href={path}>{title}</Link>
                                    </li>
                                ))}

                            </ul>
                        </AccordionItem>
                    ))}
                </Accordion>
                <ul className={`${styles.navbarMob_mainMenu} menu_withoutSub`}>
                    {navigation.filter(item => !item.submenu).map(({id, title, path}) => (
                        <li key={id} className={styles.navbarMob_menuItem}>
                            <Link className={styles.navbarMob_menuLink} href={path}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </ul>
            <div className={`${styles.navbarMob_btnwrap} btn_contact`}>
                <Link className={styles.navbarMob_btn} href={'/'}>Contacts <Image src='/images/PaperPlaneWhite.svg' alt='arrow' width={18} height={18} /></Link>
            </div>
        </nav>
    );
}

export default NavbarMob;
