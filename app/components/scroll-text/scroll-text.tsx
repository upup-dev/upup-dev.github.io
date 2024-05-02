"use client";
import styles from "./style.module.scss";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import {string} from "prop-types";

gsap.registerPlugin(ScrollTrigger);

type Props = {
    text: string;
}

const ScrollText = ({ text }: Props) => {
    const container = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (container.current && container.current.textContent) {
            const content = container.current.textContent;
            const newContent = document.createDocumentFragment(); // Create a fragment to hold the new structure

            Array.from(content).forEach(char => {
                if (char !== ' ') { // Check if the character is not a space
                    const span = document.createElement("span");
                    span.textContent = char;
                    span.style.display = "inline-block";
                    newContent.appendChild(span);
                } else {
                    newContent.appendChild(document.createTextNode(char)); // Preserve spaces as text nodes
                }
            });

            container.current.innerHTML = "";
            container.current.appendChild(newContent);

            // Select all spans inside the container to animate
            const spans = container.current.querySelectorAll("span");

            gsap.from(spans, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                    end: "top 35%",
                    scrub: true,
                    markers: false
                },
                opacity: 0.2,
                stagger: 0.1
            });
        }
    }, []);

    return (
        <p ref={container} className={`${styles.split_text} reveal-type`}>{text}</p>
    );
};

export default ScrollText;