import styles from "./page.module.scss";
import Header from "@/app/components/header/header";
import HeroBanner from "@/app/components/hero-banner/heroBanner";

const Home = () => {
  return (
    <main className={styles.main}>
        <Header />
        <HeroBanner />
    </main>
  );
}
export default Home;