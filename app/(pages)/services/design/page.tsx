import styles from "./style.module.scss";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export default function Page() {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.sorry}>
                <h1>Design </h1>
                <p>Sorry, this page is not ready.</p>
            </section>
            <Footer />
        </main>
    );
}
