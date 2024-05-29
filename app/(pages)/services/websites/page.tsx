import styles from "./style.module.scss";
import Header from "@/app/components/header/header";
import Technologies from "@/app/components/sections/technologies/technologies";
import {technologiesData} from "@/app/data/DataHomePage";
import Testimonials from "@/app/components/sections/testimonials/testimonials";
import Contact from "@/app/components/sections/contact/contact";
import Footer from "@/app/components/footer/footer";
import OurApproach from "@/app/components/sections/our-approach/ourApproach";
import {industriesProof, industriesTeem} from "@/app/data/DataIndustries";
import Proof from "@/app/components/sections-industries/proof/proof";
import Meet from "@/app/components/sections-industries/meet/meet";
import {servicesSection2, servicesWebsitesHeroBanner} from "@/app/data/DataServices";
import HeroBanner from "@/app/components/sections-services/hero-banner/heroBanner";
import Teem from "@/app/components/sections-services/teem/teem";
import Journey from "@/app/components/sections-services/journey/journey";

export default function Page() {
    return (
        <main className={styles.main}>
            <Header />
            <HeroBanner data={servicesWebsitesHeroBanner} />
            <OurApproach data={servicesSection2}/>
            <Teem />
            <Journey />
            <Proof data={industriesProof}/>
            <Technologies data={technologiesData as [{ id: number; urlIcon: string; }]} />
            <Meet data={industriesTeem}/>
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}
