import styles from "./style.module.scss";
import React from "react";
import SliderIndustries from "@/app/components/sections/industries/slider-industries";

const Industries = () => {
    return (
        <section className={styles.industries}>
            <div className={styles.container}>
                <SliderIndustries />
            </div>
        </section>
    );
}
export default Industries;