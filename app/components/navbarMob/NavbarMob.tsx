import styles from "./style.module.scss";
import Link from "next/link";
import {useState} from "react";

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
                path: '/ux-ui-design'
            },
            {
                id: 1,
                title: 'Web Applications',
                path: '/ux-ui-design'
            },
            {
                id: 2,
                title: 'Websites',
                path: '/ux-ui-design'
            },
            {
                id: 3,
                title: 'Mobile Development',
                path: '/ux-ui-design'
            },
            {
                id: 4,
                title: 'Hosting & DevOps',
                path: '/ux-ui-design'
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
    {id: 4, title: 'About Us', path: '/about-us', arrow: false},
];

const NavbarMob = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className={styles.navbarMob}>
            <ul className={styles.navbarMob_items}>
                <li className={styles.navbarMob_item}>
                    Industries
                    <ul className={styles.navbarMob_submenu}>
                        <li className={styles.navbarMob_submenuItem}>
                            <Link className={styles.navbarMob_submenuItemLink} href="/">Fintech</Link>
                        </li>
                        <li className={styles.navbarMob_submenuItem}>
                            <Link className={styles.navbarMob_submenuItemLink} href="/">Healthcare</Link>
                        </li>
                        <li className={styles.navbarMob_submenuItem}>
                            <Link className={styles.navbarMob_submenuItemLink} href="/">Productivity</Link>
                        </li>
                        <li className={styles.navbarMob_submenuItem}>
                            <Link className={styles.navbarMob_submenuItemLink} href="/">E-commerce</Link>
                        </li>
                    </ul>
                </li>
                <li className={styles.navbarMob_item}>Services</li>
                <li className={styles.navbarMob_item}>Engagement Models</li>
                <li className={styles.navbarMob_item}>Portfolio</li>
                <li className={styles.navbarMob_item}>About Us</li>
            </ul>
            <Link href={'/'}>Contacts</Link>
        </nav>
    );
}

export default NavbarMob;
