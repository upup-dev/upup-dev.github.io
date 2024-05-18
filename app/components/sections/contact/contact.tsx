import styles from "./style.module.scss";
import Btn from "@/app/components/btn/btn";
import Image from "next/image";
import ContactForm from "@/app/components/contact-form/contactForm";

const Contact = () => {
    return (
        <section className={styles.heroBanner}>
            <div className={styles.container}>
                <div className={styles.heroBanner_right}>
                    <div className={styles.heroBanner_rightGroup}>
                        <div className={styles.heroBanner_rightVector}>
                            <Image className={styles.contact_desc} src={'/images/hero-vector-orange.svg'} alt={'vector'} width={272} height={378} />
                            <Image className={styles.contact_mob} src={'/images/vector_mob.svg'} alt={'vector'} width={171} height={171} />
                        </div>
                        <div className={styles.heroBanner_rightbottom}>
                            <ul className={styles.contact_infoList}>
                                <li><Image src={'/images/Info.svg'} alt={'check'} height={18} width={18}/><span>24hours - max response time.</span>
                                </li>
                                <li><Image src={'/images/Info.svg'} alt={'check'} height={18} width={18}/><span>A real person will answer you.</span>
                                </li>
                                <li><Image src={'/images/Info.svg'} alt={'check'} height={18} width={18}/><span>No AI-generated emails.</span>
                                </li>
                                <li>
                                    <span>Direct contact</span>
                                    <a href="mailto:hello@upup.one">hello@upup.one</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Image className={styles.heroBanner_bgImages} src={'/images/picHeroBanner.jpg'} alt={'pic'}
                           width={598} height={692} priority/>
                </div>
                <div className={styles.heroBanner_left}>
                    <h1 className={`${styles.heroBanner_title} h1 title-dark`}>Ready to discuss<br/> your project with us?</h1>
                    <ContactForm />
                    <p className={styles.contactForm_policy}>By sending this form I confirm that I have read and accept the Privacy Policy</p>
                </div>
            </div>
        </section>
    );
}
export default Contact;