import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/app/components/header/header";

const Home = () => {
  return (
    <main className={styles.main}>
        <Header />
      <h1>Home Page</h1>
    </main>
  );
}
export default Home;