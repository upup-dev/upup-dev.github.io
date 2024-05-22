import styles from "./style.module.scss";
import Header from "@/app/components/header/header";
import Technologies from "@/app/components/sections/technologies/technologies";
import {technologiesData} from "@/app/data/DataHomePage";
import Testimonials from "@/app/components/sections/testimonials/testimonials";
import Contact from "@/app/components/sections/contact/contact";
import Footer from "@/app/components/footer/footer";

export default function Page() {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.sorry}>
                <h1>Mobile Development </h1>
                <p>Sorry, this page is not ready.</p>
            </section>
            <Technologies data={technologiesData as [{ id: number; urlIcon: string; }]}/>
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}
