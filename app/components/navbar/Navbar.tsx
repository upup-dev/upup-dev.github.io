"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import {useCallback, useEffect, useRef, useState} from "react";
import {
    design,
    eCommerce,
    edtech,
    fintech,
    healthcare, hostingDevops,
    industries, mobileDevelopment,
    services,
    webApplications, websites
} from "@/app/data/variables";

const navigation = [
    {id: 0, title: 'Industries', path: 'url', arrow: true, submenu: []},
    {id: 1, title: 'Services', path: 'url', arrow: true, submenu: []},
    {id: 2, title: 'Engagement Models', path: 'url', arrow: true, submenu: []},
    {id: 3, title: 'Portfolio', path: '/portfolio', arrow: false},
    {id: 4, title: 'About Us', path: '/about', arrow: false},
];

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [hoverMenu, setHoverMenu] = useState(false);
    const [activeMenuSub, setActiveMenuSub] = useState(null);
    const [hoverMenuSub, setHoverMenuSub] = useState(false);

    const blockRef1 = useRef<HTMLDivElement>(null);
    const blockRef2 = useRef<HTMLDivElement>(null);
    const blockRef3 = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);
    const hoverBgRef = useRef<HTMLDivElement>(null);
    const [activeBlock, setActiveBlock] = useState(1); // Стан для відстеження активного блоку
    const [height, setHeight] = useState(0);

    const caretDown = '/images/CaretDown.svg';

    const handleMouseEnter = useCallback(({id}: { id: any }) => {
        setActiveBlock(id)
        setActiveMenu(id);
        setHoverMenu(true)
        console.log('id', id)
        const menuItem = document.getElementById(`menu-item-${id}`);
        console.log('menuItem', `menu-item-${id}`)
        if (menuItem && hoverBgRef.current) {
            const rect = menuItem.getBoundingClientRect();
            hoverBgRef.current.style.width = `${rect.width}px`;
            hoverBgRef.current.style.height = `${rect.height}px`;
            hoverBgRef.current.style.left = `${menuItem.offsetLeft}px`;
            hoverBgRef.current.style.top = `${menuItem.offsetTop}px`;
        }
    }, [hoverMenu, hoverMenuSub]);
    const handleMouseLeave = useCallback(() => {
        setHoverMenu(false)
        if (!hoverMenu && !hoverMenuSub) {
            setActiveMenuSub(null);
            setActiveMenu(null);
        }
        setTimeout(() => {
            if (!hoverMenu) {
                setActiveMenu(null);
                if (hoverBgRef.current) {
                    hoverBgRef.current.style.width = '0';
                    hoverBgRef.current.style.height = '0';
                    hoverBgRef.current.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }
            }
        }, 300);
    }, [hoverMenu, hoverMenuSub]);
    const handleMouseEnterSub = () => {
        setHoverMenuSub(true)
        setActiveMenuSub(activeMenu);

    };
    const handleMouseLeaveSub = useCallback(() => {
        setHoverMenuSub(false)

        if(!hoverMenu && !hoverMenuSub) {
            setActiveMenuSub(null);
            setActiveMenu(null);
        }
    }, [hoverMenu, hoverMenuSub]);

    useEffect(() => {
        if(!hoverMenuSub && !hoverMenu) {
            handleMouseLeave()
            handleMouseLeaveSub();
        }

    }, [hoverMenu, hoverMenuSub, handleMouseLeave, handleMouseLeaveSub]);

    useEffect(() => {
        let height = 0;

        // Визначаємо висоту залежно від активного блоку
        switch (activeBlock) {
            case 0:
                if (blockRef1.current) {
                    height = blockRef1.current.offsetHeight;
                }
                break;
            case 1:
                if (blockRef2.current) {
                    height = blockRef2.current.offsetHeight;
                }
                break;
            case 2:
                if (blockRef3.current) {
                    height = blockRef3.current.offsetHeight;
                }
                break;
            default:
                break;
        }

        setHeight(height); // Записуємо висоту активного блоку

        if (targetRef.current) {
            targetRef.current.style.height = `${height}px`; // Встановлюємо висоту для цільового блоку
        }
    }, [activeBlock]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const hoverBg = hoverBgRef.current;
            if (hoverBg) {
                hoverBg.style.left = `${e.clientX - hoverBg.offsetWidth / 2}px`;
                hoverBg.style.top = `${e.clientY - hoverBg.offsetHeight / 2}px`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className={styles.header_navbarWrapper}>
            <ul className={`${styles.header_navbar} ${styles.header_navbar1}`}>
                {navigation.filter(item => item.submenu).map((item) => (
                    <li
                        className={`${styles.header_navbarItems} ${
                            activeMenu === item.id ? styles.active : ""
                        } menu-item-${item.id}`}
                        key={item.id}
                        onMouseEnter={() => handleMouseEnter({id: item.id})}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link href={{}}>
                            {item.title} {item.arrow && <Image src={caretDown} alt="v" width={16} height={16}/>}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className={`${styles.header_navbar} ${styles.header_navbar2}`}>
                {navigation.filter(item => !item.submenu).map((item) => (
                    <li
                        className={`${styles.header_navbarItems} ${activeMenu === item.id ? styles.active : ""}`}
                        key={item.id}
                    >
                        <Link href={item.path}>
                            {item.title} {item.arrow &&
                            <Image src="/images/CaretDown.svg" alt="v" width={16} height={16}/>}
                        </Link>
                    </li>
                ))}
            </ul>
            <div ref={hoverBgRef} className={styles.hover_bg}></div>
            <div ref={targetRef}
                 className={`${styles.header_submenuWrapper} ${activeMenu === 0 || activeMenu === 1 || activeMenu === 2 ? styles.active : ""}`}
                 style={{height: `${height}px`}}
                 onMouseEnter={handleMouseEnterSub}
                 onMouseLeave={handleMouseLeaveSub}>
                <div ref={blockRef1}
                     className={`${styles.header_submenuContainer} ${activeMenu === 0 ? styles.active : ""}`}>
                    <ul className={styles.header_submenu}>
                        <li className={styles.header_submenuItem}>
                            <Link className={styles.header_submenuItemLink} href={`/${industries}/${fintech}`}>
                                <span className={styles.header_submenuItemTitle}>Fintech</span>
                                <span className={styles.header_submenuItemDescription}>Thoughtful design for satisfying user experience</span>
                            </Link>
                        </li>
                        <li className={styles.header_submenuItem}>
                            <Link className={styles.header_submenuItemLink} href={`/${industries}/${healthcare}`}>
                                <span className={styles.header_submenuItemTitle}>Healthcare</span>
                                <span className={styles.header_submenuItemDescription}>To always be on a fingertip of your clients</span>
                            </Link>
                        </li>
                        <li className={styles.header_submenuItem}>
                            <Link className={styles.header_submenuItemLink} href={`/${industries}/${edtech}`}>
                                <span className={styles.header_submenuItemTitle}>EdTech</span>
                                <span className={styles.header_submenuItemDescription}>Catching web representation of your business</span>
                            </Link>
                        </li>
                        <li className={styles.header_submenuItem}>
                            <Link className={styles.header_submenuItemLink} href={`/${industries}/${eCommerce}`}>
                                <span className={styles.header_submenuItemTitle}>E-commerce</span>
                                <span className={styles.header_submenuItemDescription}>Biggest possible audience on your projects</span>
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.header_submenuPortfolio}>
                        <div className={styles.header_submenuPortfolioItem}>
                            <Link href={"/"}>
                                <Image
                                    src="/images/portfolio-navbar-1.jpg"
                                    alt={"WebSite"}
                                    width={326}
                                    height={227}
                                    priority
                                />
                            </Link>
                            <div className={styles.header_submenuPortfolioName}>Website</div>
                        </div>
                        <div className={styles.header_submenuPortfolioItem}>
                            <Link href={"/"}>
                                <Image
                                    src="/images/portfolio-navbar-2.jpg"
                                    alt={"WebSite"}
                                    width={326}
                                    height={227}
                                    priority
                                />
                            </Link>
                            <div className={styles.header_submenuPortfolioName}>Web App</div>
                        </div>
                    </div>
                </div>
                <div ref={blockRef2}
                     className={`${styles.header_submenuContainer} ${activeMenu === 1 ? styles.active : ""}`}>
                    <ul className={styles.header_submenu}>
                        <li className={styles.header_submenuItem}>
                            <Link className={styles.header_submenuItemLink} href={`/${services}/${design}`}>
                                <span className={styles.header_submenuItemTitle}>UX/UI Design</span>
                                <span className={styles.header_submenuItemDescription}>Thoughtful design for satisfying user experience</span>
                            </Link>
                        </li>
                        <li className={styles.header_submenuItem}>
                            <Link className={styles.header_submenuItemLink} href={`/${services}/${webApplications}`}>
                                <span className={styles.header_submenuItemTitle}>Web Applications</span>
                                <span className={styles.header_submenuItemDescription}>To always be on a fingertip of your clients</span>
                            </Link>
                        </li>
                        <li className={styles.header_submenuItem}>
                            <Link className={styles.header_submenuItemLink} href={`/${services}/${websites}`}>
                                <span className={styles.header_submenuItemTitle}>Websites</span>
                                <span className={styles.header_submenuItemDescription}>Catching web representation of your business</span>
                            </Link>
                        </li>
                        <li className={styles.header_submenuItem}>
                            <Link className={styles.header_submenuItemLink} href={`/${services}/${mobileDevelopment}`}>
                                <span className={styles.header_submenuItemTitle}>Mobile Development</span>
                                <span className={styles.header_submenuItemDescription}>Biggest possible audience on your projects</span>
                            </Link>
                        </li>
                        <li className={styles.header_submenuItem}>
                            <Link className={styles.header_submenuItemLink} href={`/${services}/${hostingDevops}`}>
                                <span className={styles.header_submenuItemTitle}>Hosting & DevOps</span>
                                <span className={styles.header_submenuItemDescription}>Effortless deployment followed by happy dev team</span>
                            </Link>
                        </li>

                    </ul>
                    <div className={styles.header_submenuPortfolio}>
                        <div className={styles.header_submenuPortfolioItem}>
                            <Link href={"/"}>
                                <Image
                                    src="/images/portfolio-navbar-1.jpg"
                                    alt={"WebSite"}
                                    width={326}
                                    height={227}
                                    priority
                                />
                            </Link>
                            <div className={styles.header_submenuPortfolioName}>Website</div>
                        </div>
                        <div className={styles.header_submenuPortfolioItem}>
                            <Link href={"/"}>
                                <Image
                                    src="/images/portfolio-navbar-2.jpg"
                                    alt={"WebSite"}
                                    width={326}
                                    height={227}
                                    priority
                                />
                            </Link>
                            <div className={styles.header_submenuPortfolioName}>Web App</div>
                        </div>
                    </div>
                </div>
                <div ref={blockRef3}
                     className={`${styles.header_submenuContainer} ${activeMenu === 2 ? styles.active : ""}`}>
                    <ul className={styles.header_submenu}>
                        <li className={styles.header_submenuItem}>
                            <Link className={styles.header_submenuItemLink} href="/">
                                <span className={styles.header_submenuItemTitle}>Dedicated Team</span>
                                <span className={styles.header_submenuItemDescription}>Thoughtful design for satisfying user experience</span>
                            </Link>
                        </li>
                        <li className={styles.header_submenuItem}>
                            <Link className={styles.header_submenuItemLink} href="/">
                                <span className={styles.header_submenuItemTitle}>Outsourcing model</span>
                                <span className={styles.header_submenuItemDescription}>To always be on a fingertip of your clients</span>
                            </Link>
                        </li>
                        <li className={styles.header_submenuItem}>
                            <Link className={styles.header_submenuItemLink} href="/">
                                <span className={styles.header_submenuItemTitle}>Time & Materials model</span>
                                <span className={styles.header_submenuItemDescription}>Catching web representation of your business</span>
                            </Link>
                        </li>
                        <li className={styles.header_submenuItem}>
                            <Link className={styles.header_submenuItemLink} href="/">
                                <span className={styles.header_submenuItemTitle}>Fixed price</span>
                                <span className={styles.header_submenuItemDescription}>Biggest possible audience on your projects</span>
                            </Link>
                        </li>
                        <li className={styles.header_submenuItem}>
                            <Link className={styles.header_submenuItemLink} href="/">
                                <span className={styles.header_submenuItemTitle}>Outstaffing model</span>
                                <span className={styles.header_submenuItemDescription}>Biggest possible audience on your projects</span>
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.header_submenuPortfolio}>
                        <div className={styles.header_submenuPortfolioItem}>
                            <Link href={"/"}>
                                <Image
                                    src="/images/portfolio-navbar-3.png"
                                    alt={"WebSite"}
                                    width={326}
                                    height={227}
                                    priority
                                />
                            </Link>
                            <div className={styles.header_submenuPortfolioName}>Website</div>
                        </div>
                        <div className={styles.header_submenuPortfolioItem}>
                            <Link href={"/"}>
                                <Image
                                    src="/images/portfolio-navbar-2.jpg"
                                    alt={"WebSite"}
                                    width={326}
                                    height={227}
                                    priority
                                />
                            </Link>
                            <div className={styles.header_submenuPortfolioName}>Web App</div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${styles.header_submenuWrapperBg} ${activeMenu === 0 || activeMenu === 1 || activeMenu === 2 ? styles.active : ""}`}></div>
        </div>
    )
        ;
}

export default Navbar;
