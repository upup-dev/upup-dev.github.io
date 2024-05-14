import styles from "./style.module.scss";
import {advantagesData, testimonialsData} from "@/app/data/DataHomePage";
import Image from "next/image";

const Testimonials = () => {

    return (
        <section className={`${styles.testimonials} testimonials`}>
            <div className={styles.testimonials_container}>
                <h3 className={`${styles.testimonials_title} h1-big`}>
                    Our Customers Say
                </h3>
                <div className={styles.testimonials_blocks}>
                    <div className={styles.testimonials_block}>
                        <div className={styles.testimonials_item}>
                            <div className={styles.testimonials_avatar}>
                                <Image src={'/images/avatar/Stive.png'} alt={'avatar'} height={80} width={80}/>
                            </div>
                            <div className={styles.testimonials_info}>
                                <div className={styles.testimonials_name}>Steve Slavutsky</div>
                                <div className={styles.testimonials_position}>CEO, CSI Works</div>
                                <div className={styles.testimonials_text}>Alex has very good business and consumer
                                    culture understanding thus produces relevant pieces of art that help us close
                                    business. very good job! We continue to work with Alex and expand our requests.
                                </div>
                            </div>
                        </div>
                        <div className={styles.testimonials_item}>
                            <div className={styles.testimonials_avatar}>
                                <Image src={'/images/avatar/Michail.png'} alt={'avatar'} height={80} width={80}/>
                            </div>
                            <div className={styles.testimonials_info}>
                                <div className={styles.testimonials_name}>Michael T</div>
                                <div className={styles.testimonials_position}>Operations Director at GreenSolutions
                                </div>
                                <div
                                    className={styles.testimonials_text}>{'UpUp\'s deep industry insights have been invaluable to our operations. Their recommendations are always spot-on, helping us navigate the market with confidence and achieve a competitive edge.'}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.testimonials_block}>
                        <div className={styles.testimonials_item}>
                            <div className={styles.testimonials_avatar}>
                                <Image src={'/images/avatar/Serhiy.png'} alt={'avatar'} height={80} width={80}/>
                            </div>
                            <div className={styles.testimonials_info}>
                                <div className={styles.testimonials_name}>Serhiy Boichun</div>
                                <div className={styles.testimonials_position}>CEO, JayaDigital</div>
                                <div
                                    className={styles.testimonials_text}>{'We were pleased with their client-centric approach and devotion to the project\'s success.'}</div>
                            </div>
                        </div>
                        <div className={styles.testimonials_item}>
                            <div className={styles.testimonials_avatar}>
                                <Image src={'/images/avatar/Oly2x.png'} alt={'avatar'} height={80} width={80}/>
                            </div>
                            <div className={styles.testimonials_info}>
                                <div className={styles.testimonials_name}>Olga Yudina</div>
                                <div className={styles.testimonials_position}>CEO, Mental Health Solutions Provider
                                </div>
                                <div
                                    className={styles.testimonials_text}>{'UpUp’s designs were well-documented and organized in Figma files, facilitating seamless handover and implementation by developers. The team was responsive, prompt, courteous, and professional throughout the project, and internal stakeholders praised the service provider\'s transparency and ability to consistently seek feedback and concerns.'}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.testimonials_block}>
                        <div className={styles.testimonials_item}>
                            <div className={styles.testimonials_avatar}>
                                <Image src={'/images/avatar/Samanta.png'} alt={'avatar'} height={80} width={80}/>
                            </div>
                            <div className={styles.testimonials_info}>
                                <div className={styles.testimonials_name}>Samantha K</div>
                                <div className={styles.testimonials_position}>CEO, CSI Works</div>
                                <div
                                    className={styles.testimonials_text}>{'The commitment from the UpUp team is unparalleled. They\'ve been with us every step of the way, from initial planning to execution, demonstrating an unwavering dedication to our long-term success.'}</div>
                            </div>
                        </div>
                        <div className={styles.testimonials_item}>
                            <div className={styles.testimonials_avatar}>
                                <Image src={'/images/avatar/Daniel.png'} alt={'avatar'} height={80} width={80}/>
                            </div>
                            <div className={styles.testimonials_info}>
                                <div className={styles.testimonials_name}>Daniel S</div>
                                <div className={styles.testimonials_position}>Founder of FinTech Dynamics</div>
                                <div className={styles.testimonials_text}>{'Our long-term partnership with UpUp has been instrumental in our sustained growth. They\'ve consistently provided innovative solutions that have kept us ahead of technological advancements and market trends'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;