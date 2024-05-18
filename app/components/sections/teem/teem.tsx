import styles from "./style.module.scss";
import Btn from "@/app/components/btn/btn";

const Teem = () => {
    return (
        <section className={`${styles.teem} teem`}>
            <div className={styles.teem_container}>
                <p className={styles.teem_text}>{'Widely experienced tech professionals, motivated by our clients businesses\' growth'}</p>
                <div className={styles.teem_wrapBtn}>
                    <Btn name={'Meet you digital team'} color={'#FFF'} white={true} fontSize={'font-18px'} url={'/'} type={'link'}/>
                </div>
            </div>
        </section>
    );
}

export default Teem;