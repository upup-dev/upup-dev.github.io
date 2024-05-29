import styles from "./style.module.scss";
import {servicesJourney} from "@/app/data/DataServices";
import Link from "next/link";
import Btn from "@/app/components/btn/btn";


const Journey = () => {
    const iconColor = '#fff'
    return (
        <section className={`${styles.journey} journey`}>
            <div className={styles.journey_container}>
                <div className={styles.journey_info}>
                    <div className={styles.journey_info_Block}>
                        <h3>Our Path to Perfecting Your Web Presence</h3>

                        <Link href="/">
                            <span>
                            Become noticed
                            </span>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.875 28.125L25.875 10.125" stroke={iconColor} strokeWidth="3"
                                      strokeLinecap={'square'} strokeLinejoin="round"/>
                                <path d="M12.375 9H27V23.625" stroke={iconColor} strokeWidth="3" strokeLinecap="square"
                                      strokeLinejoin="round"/>
                            </svg>
                        </Link>

                    </div>
                </div>
                <div className={styles.journey_content}>
                    <h2 className={`${styles.journey_content_title} h1-big`}>What’s our journey?</h2>
                    <p className={styles.journey_caption}>Our journey through diverse industries has cultivated a blend
                        of insights, crafting a proven
                        approach to delivering top-notch websites. We dive into your business to recognize what makes
                        your audience tick and tailor everything to fit just right. With our finger on the pulse of the
                        latest trends and passionate commitment, we blend strategy with creativity to make sure your
                        website does more than just exist</p>
                    <div className={styles.journey_performs}>— it performs</div>
                    <div className={styles.journey_listWrapItems}>
                        {servicesJourney.map((i, index) => (
                            <div className={styles.journey_listWrap} key={index}>
                                <div className={styles.journey_number}>
                                    [ {i.id} ]
                                </div>
                                <div className={styles.journey_textWrap}>
                                    <h3 className={styles.journey_textTitle}>{i.title}</h3>
                                    <p className={styles.journey_textcaption}>{i.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Journey;