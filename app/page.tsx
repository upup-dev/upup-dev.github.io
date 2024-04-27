import styles from "./page.module.scss";
import Header from "@/app/components/header/header";
import HeroBanner from "@/app/components/hero-banner/heroBanner";
import OurApproach from "@/app/components/our-approach/ourApproach";

const Home = () => {
  return (
    <main className={styles.main}>
        <Header />
        <HeroBanner />
        <OurApproach />
    </main>
  );
}
export default Home;