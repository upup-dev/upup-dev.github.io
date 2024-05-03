"use client"
import styles from "./style.module.scss";
import React from "react";
import SliderIndustries from "@/app/components/sections/industries/slider-industries";
import AccordionIndustries from "@/app/components/sections/industries/accordion-industries";
import useWindowSize from "@/app/hooks/useWindowsSize";

const Industries = () => {
    const { width } = useWindowSize();
    return (
        <section className={styles.industries}>
            <div className={styles.container}>
                {width && width < 1025 ? (
                    <AccordionIndustries />
                ) : (
                    <SliderIndustries />
                )}
            </div>
        </section>
    );
}
export default Industries;