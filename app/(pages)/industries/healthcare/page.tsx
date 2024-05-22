import styles from "./style.module.scss";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import HeroBanner from "@/app/components/sections-industries/hero-banner/heroBanner";
import Technologies from "@/app/components/sections/technologies/technologies";
import {technologiesData} from "@/app/data/DataHomePage";
import Testimonials from "@/app/components/sections/testimonials/testimonials";
import Contact from "@/app/components/sections/contact/contact";

export default function Page() {
    return (
        <main className={styles.main}>
            <Header />
            {/*<HeroBanner />*/}
            <Technologies data={technologiesData as [{ id: number; urlIcon: string; }]}/>
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}
