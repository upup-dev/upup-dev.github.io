import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import {navigation} from "@/app/data/DataNav";
import {AccordionItem} from "@nextui-org/react";
import NavbarMob from "@/app/components/navbarMob/NavbarMob";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_wrapperTop}>
                    <div className={styles.footer_logo}>
                        <Link href={'/'}>
                            <Image src={'/images/logo-footer.png'} alt={'upup'} height={139} width={356}/>
                        </Link>
                        <div className={styles.footer_mail}>
                            <h4>Work with us</h4>
                            <Link href="mailto:hello@upup.one">hello@upup.one</Link>
                        </div>
                    </div>
                    <div className={styles.footer_nav}>
                        {navigation.filter(item => item.submenu).map(({id, title, submenu}) => (
                            <ul className={styles.footer_navItems} key={id}>
                                <li className={styles.footer_navTitle}>{title}</li>
                                <ul className={styles.footer_navItemUl}>
                                    {submenu?.map((i, index) => (
                                        <li key={index}><a href={i.path}>{i.title}</a></li>
                                    ))}
                                </ul>
                            </ul>
                        ))}
                        <ul className={`${styles.footer_navItems} ${styles.footer_navItemsNS}`}>
                            {navigation.filter(item => !item.submenu).map(({id, title, path}) => (
                                <li key={id} className={styles.footer_navTitle}><a href={path}>{title}</a></li>
                            ))}
                        </ul>
                        <div className={styles.footer_platforms}>
                            <Link href={'/'} ><Image src="/images/clutch.png" alt={'clutch'} width={168} height={60}/></Link>
                            <Link href={'/'} ><Image src="/images/upwork.png" alt={'upwork'} width={194} height={60}/></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_wrapperbottom}>
                    <div className={styles.footer_upup}>© UPUP 2024</div>
                    <div className={styles.footer_soc}>
                        <Link href={'https://www.linkedin.com/company/upup-company/'}>{'[ Linkedin ]'}</Link>
                        <Link href={'https://jobs.dou.ua/companies/upup/'}>{'[ DOU ]'}</Link>
                    </div>
                    <Link className={styles.footer_policy} href={'/'}>Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
