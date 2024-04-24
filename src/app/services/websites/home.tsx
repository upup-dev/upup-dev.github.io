import Image from "next/image";
import styles from "./style.module.scss";
import Header from "@/app/components/header/header";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <h1>Home Page</h1>
        </main>
    );
}
