import styles from "./style.module.scss";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import HeroBanner from "@/app/components/sections-industries/hero-banner/heroBanner";

export default function Page() {
    return (
        <main className={styles.main}>
            <Header />
            <HeroBanner />
            <Footer />
        </main>
    );
}
