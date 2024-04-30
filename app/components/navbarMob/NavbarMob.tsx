import styles from "./style.module.scss";
import Link from "next/link";
import {Accordion, AccordionItem} from "@nextui-org/react";
import Image from "next/image";

const navigation = [
    {id: 0, title: 'Industries', path: '{}', arrow: true, submenu: [
            {
                id: 0,
                title: 'Fintech',
                path: '/ux-ui-design'
            },
            {
                id: 1,
                title: 'Healthcare',
                path: '/ux-ui-design'
            },
            {
                id: 2,
                title: 'Productivity',
                path: '/ux-ui-design'
            },
            {
                id: 3,
                title: 'E-commerce',
                path: '/ux-ui-design'
            }
        ]},
    {id: 1, title: 'Services', path: '{}', arrow: true, submenu: [
            {
                id: 0,
                title: 'UX/UI Design',
                path: '/services/websites'
            },
            {
                id: 1,
                title: 'Web Applications',
                path: '/services/websites'
            },
            {
                id: 2,
                title: 'WebSites',
                path: '/services/websites'
            },
            {
                id: 3,
                title: 'Mobile Development',
                path: '/services/websites'
            },
            {
                id: 4,
                title: 'Hosting & DevOps',
                path: '//services/websites'
            },
        ]},
    {id: 2, title: 'Engagement Models', path: '{}', arrow: true, submenu: [
            {
                id: 0,
                title: 'Dedicated Team',
                path: '/ux-ui-design'
            },
            {
                id: 1,
                title: 'Outsourcing model',
                path: '/ux-ui-design'
            },
            {
                id: 2,
                title: 'Time & Materials model',
                path: '/ux-ui-design'
            },
            {
                id: 3,
                title: 'Fixed price',
                path: '/ux-ui-design'
            },
            {
                id: 4,
                title: 'Outstaffing model',
                path: '/ux-ui-design'
            },
        ]},
    {id: 3, title: 'Portfolio', path: '/portfolio', arrow: false},
    {id: 4, title: 'About Us', path: '/about', arrow: false},
];

const NavbarMob = () => {
    const arrowDown = '/images/ArrowDown.svg'
    const arrowUp = '/images/ArrowUp.svg'
    const itemClasses = {
        base: "mob-menu",
        title: "mob-menu_title",
        trigger: "mob-menu_trigger",
        indicator: "mob-menu_indicator",
        content: "mob-menu_content",
    };

    return (
        <nav className={styles.navbarMob}>
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
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                    duration: 1,
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
                        <AccordionItem key={id} aria-label={title} title={title} indicator={({ isOpen }) => (!isOpen ? <Image src={arrowDown} alt='Arrow Down' width={24} height={24}/> : <Image src={arrowUp} alt='Arrow Up' width={24} height={24}/>)} >
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
                <ul className={styles.navbarMob_mainMenu}>
                    {navigation.filter(item => !item.submenu).map(({id, title, path}) => (
                        <li key={id} className={styles.navbarMob_menuItem}>
                            <Link className={styles.navbarMob_menuLink} href={path}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </ul>
            <div className={styles.navbarMob_btnwrap}>
                <Link className={styles.navbarMob_btn} href={'/'}>Contacts <Image src='/images/PaperPlaneWhite.svg' alt='arrow' width={18} height={18} /></Link>
            </div>
        </nav>
    );
}

export default NavbarMob;
