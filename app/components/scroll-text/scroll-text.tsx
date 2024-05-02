"use client";
import styles from "./style.module.scss";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
    text: string;
}

const ScrollText = ({ text }: Props) => {
    const container = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        console.log('Init')
        if (container.current && container.current.textContent) {
            console.log('Init 2')
            container.current.classList.add('init-text');
            const words = container.current.textContent.split(/\s+/); // Розділення тексту на слова
            const newContent = document.createDocumentFragment();

            words.forEach((word, index) => {
                const wordSpan = document.createElement("span"); // Створення span для кожного слова
                wordSpan.style.display = "inline-block"; // Гарантія, що слова залишаються разом

                Array.from(word).forEach(char => {
                    const charSpan = document.createElement("span"); // Створення span для кожної букви
                    charSpan.textContent = char;
                    charSpan.style.display = "inline-block"; // Налаштування букв в лінію
                    wordSpan.appendChild(charSpan);
                });

                newContent.appendChild(wordSpan);

                // Додавання пробілу між словами, крім останнього слова
                if (index < words.length - 1) {
                    newContent.appendChild(document.createTextNode(' '));
                }
            });

            container.current.innerHTML = "";
            container.current.appendChild(newContent);

            // Анімація для всіх char spans
            const charSpans = container.current.querySelectorAll("span > span"); // Вибірка тільки внутрішніх span

            gsap.from(charSpans, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                    end: "top 35%",
                    scrub: true,
                    markers: false
                },
                opacity: 0.2,
                stagger: 0.1,
            });
        }
        return () => console.log('Cleanup')
    }, []);


    return (
        <p ref={container} className={`${styles.split_text} reveal-type`}>{text}</p>
    );
};

export default ScrollText;