import styles from "./style.module.scss";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import HeroBanner from "@/app/components/sections-industries/hero-banner/heroBanner";
import Technologies from "@/app/components/sections/technologies/technologies";
import {technologiesData} from "@/app/data/DataHomePage";
import Testimonials from "@/app/components/sections/testimonials/testimonials";
import Contact from "@/app/components/sections/contact/contact";
import {
    industriesComponentsSide,
    industriesHeroBanner,
    industriesProof,
    industriesSalesSection
} from "@/app/data/DataIndustries";
import SalesSection from "@/app/components/sections-industries/sales-section/salesSection";
import ComponentsSide from "@/app/components/sections-industries/components-side/componentsSide";
import Proof from "@/app/components/sections-industries/proof/proof";

export default function Page() {
    return (
        <main className={styles.main}>
            <Header />
            <HeroBanner data={industriesHeroBanner} />
            <SalesSection data={industriesSalesSection} />
            <ComponentsSide data={industriesComponentsSide} />
            <Proof data={industriesProof}/>
            <Technologies data={technologiesData as [{ id: number; urlIcon: string; }]} />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}
