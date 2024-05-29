import styles from "./page.module.scss";
import Header from "@/app/components/header/header";
import OurApproach from "@/app/components/sections/our-approach/ourApproach";
import Industries from "@/app/components/sections/industries/industries";
import OurAdvantages from "@/app/components/sections/our-advantages/ourAdvantages";
import Services from "@/app/components/sections/services/services";
import Feedback from "@/app/components/sections/feedback/feedback";
import Teem from "@/app/components/sections/teem/teem";
import CooperationModels from "@/app/components/sections/cooperation-model/cooperationModels";
import Technologies from "@/app/components/sections/technologies/technologies";
import {homesSection2, technologiesData} from "@/app/data/DataHomePage";
import Testimonials from "@/app/components/sections/testimonials/testimonials";
import Contact from "@/app/components/sections/contact/contact";
import Footer from "@/app/components/footer/footer";
import HeroBanner from "@/app/components/sections/hero-banner/heroBanner";



const Home = () => {
  return (
    <main className={styles.main}>
        <Header />
        <HeroBanner />
        <OurApproach data={homesSection2}/>
        <Industries />
        <OurAdvantages />
        <Services />
        <Feedback />
        <Teem />
        <CooperationModels />
        <Technologies data={technologiesData as [{ id: number; urlIcon: string; }]}/>
        <Testimonials />
        <Contact />
        <Footer />
    </main>
  );
}
export default Home;