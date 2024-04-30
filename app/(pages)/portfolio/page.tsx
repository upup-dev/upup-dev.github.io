import styles from "./style.module.scss";
import Header from "@/app/components/header/header";

export default function Page() {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.sorry}>
                <h1>Portfolio</h1>
                <p>Sorry, this page is not ready.</p>
            </section>
        </main>
    );
}
