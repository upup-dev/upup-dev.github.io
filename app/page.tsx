import styles from "./page.module.scss";
import Header from "@/app/components/header/header";
import HeroBanner from "@/app/components/sections/hero-banner/heroBanner";
import OurApproach from "@/app/components/sections/our-approach/ourApproach";
import Industries from "@/app/components/sections/industries/industries";
import OurAdvantages from "@/app/components/sections/our-advantages/ourAdvantages";
import Services from "@/app/components/sections/services/services";

const Home = () => {
  return (
    <main className={styles.main}>
        <Header />
        <HeroBanner />
        <OurApproach />
        <Industries />
        <OurAdvantages />
        <Services />
    </main>
  );
}
export default Home;