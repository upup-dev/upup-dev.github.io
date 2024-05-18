import styles from "./style.module.scss";
import {servicesData} from "@/app/data/DataHomePage";
import Image from "next/image";
import Btn from "@/app/components/btn/btn";

const Services = () => {
    return (
        <section className={`${styles.services} services`}>
            <h3 className={`${styles.services_title} h1-big`}>
                Services
            </h3>
            <div className={styles.services_container}>
                <div className={styles.services_blocks}>
                    {servicesData.map((i, index) => (
                        <div className={styles.services_block} key={index}>
                            <Image className={styles.services_icon} src={i.urlIcon} alt='icon' width={100}
                                   height={100}/>
                            <div className={styles.services_wrapperText}>
                                <div className={styles.services_blockTitle}>{i.title}</div>
                                <div className={styles.services_blockDescription}>{i.description}</div>
                                <Btn color={'#fff'} name={'LEARN MORE'} white={true} fontSize={'font-14px'} url={'/'} type={'link'}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Services;