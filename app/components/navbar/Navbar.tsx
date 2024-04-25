"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

const navigation = [
    {id: 0, title: 'Industries', path: '/industries', arrow: true, submenu: [
            {id: 0, title: 'UX/UI Design', description: 'Thoughtful design for satisfying user experience', path: '/ux-ui-design'},
            {id: 1, title: 'UX/UI Design', description: 'Thoughtful design for satisfying user experience', path: '/ux-ui-design'},
            {id: 2, title: 'UX/UI Design', description: 'Thoughtful design for satisfying user experience', path: '/ux-ui-design'},
            // Додайте інші пункти тут
        ]},
    {id: 1, title: 'Services', path: '/services', arrow: true, submenu: [
            {id: 0, title: 'UX/UI Design', description: 'Thoughtful design for satisfying user experience', path: '/ux-ui-design'},
            {id: 1, title: 'Web Applications', description: 'To always be on a fingertip of your clients', path: '/ux-ui-design'},
            {id: 2, title: 'Websites', description: 'Catching web representation of your business', path: '/ux-ui-design'},
            {id: 3, title: 'Mobile Development', description: 'Biggest possible audience on your projects', path: '/ux-ui-design'},
            {id: 4, title: 'Hosting & DevOps', description: 'Effortless deployment followed by happy dev team', path: '/ux-ui-design'},
            // Додайте інші пункти тут
        ]},
    {id: 2, title: 'Mobile Development', path: '/industries', arrow: true, submenu: [
            {id: 0, title: 'UX/UI Design', description: 'Thoughtful design for satisfying user experience', path: '/ux-ui-design'},
            {id: 1, title: 'UX/UI Design', description: 'Thoughtful design for satisfying user experience', path: '/ux-ui-design'},
            {id: 2, title: 'UX/UI Design', description: 'Thoughtful design for satisfying user experience', path: '/ux-ui-design'},
            // Додайте інші пункти тут
        ]},
    {id: 3, title: 'Portfolio', path: '/portfolio', arrow: false},
    {id: 4, title: 'About Us', path: '/about-us', arrow: false},
];

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const caretDown = '/images/CaretDown.svg';
    console.log('activeMenu', activeMenu)
    const handleMouseEnter = ({id}: { id: any }) => {
        setActiveMenu(id);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    return (
            <ul className={styles.header_navbar}>
                {navigation.map((item) => (
                    <li className={`${styles.header_navbarItems} ${activeMenu == item.id ? styles.active : ''}`}
                        key={item.id}
                        onMouseEnter={() => handleMouseEnter({id: item.id})}
                        onMouseLeave={handleMouseLeave}>
                        <Link href={item.path}>{item.title} {item.arrow &&
                            <Image src={caretDown} alt='v' width={16} height={16}/>}</Link>
                        {item.submenu && item.id === activeMenu && (
                            <div
                                className={`${styles.header_submenuWrapper} ${activeMenu === item.id ? styles.show : styles.hide}`}>
                                <div className={styles.header_submenuContainer}>
                                    <ul className={styles.header_submenu}>
                                        {item.submenu.map(sub => (
                                            <li className={styles.header_submenuItem} key={sub.id}>
                                                <Link className={styles.header_submenuItemLink} href={sub.path}>
                                                    <span className={styles.header_submenuItemTitle}>{sub.title}</span>
                                                    <span
                                                        className={styles.header_submenuItemDescription}>{sub.description}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className={styles.header_submenuPortfolio}>
                                        <div className={styles.header_submenuPortfolioItem}>
                                            <Link href={'/'}>
                                                <Image src='/images/portfolio-navbar-1.jpg' alt={'WebSite'}
                                                       width={326} height={227} priority></Image>
                                            </Link>
                                            <div className={styles.header_submenuPortfolioName}>Website</div>
                                        </div>
                                        <div className={styles.header_submenuPortfolioItem}>
                                            <Link href={'/'}>
                                                <Image src='/images/portfolio-navbar-2.jpg' alt={'WebSite'}
                                                       width={326} height={227} priority></Image>
                                            </Link>
                                            <div className={styles.header_submenuPortfolioName}>Web App</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
    );
}

export default Navbar;
