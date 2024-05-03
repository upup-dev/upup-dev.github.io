import styles from "./page.module.scss";
import Header from "@/app/components/header/header";
import HeroBanner from "@/app/components/sections/hero-banner/heroBanner";
import OurApproach from "@/app/components/sections/our-approach/ourApproach";
import Industries from "@/app/components/sections/industries/industries";

const Home = () => {
  return (
    <main className={styles.main}>
        <Header />
        <HeroBanner />
        <OurApproach />
        <Industries />
    </main>
  );
}
export default Home;