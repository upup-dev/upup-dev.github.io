"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from "./style.module.scss";

gsap.registerPlugin(ScrollTrigger);

type Props = {
    text: string;
};

const ScrollText = ({ text }: Props) => {
    const container = useRef<HTMLParagraphElement>(null);

    useLayoutEffect(() => {
        const element = container.current;
        if (!element) return;

        // Очищення контейнера
        element.innerHTML = '';
        const words = text.split(/\s+/);
        const newContent = document.createDocumentFragment();
        container.current.classList.add('init-text');

        words.forEach((word, index) => {
            const wordSpan = document.createElement("span");
            wordSpan.style.display = "inline-block";

            word.split('').forEach(char => {
                const charSpan = document.createElement("span");
                charSpan.textContent = char;
                charSpan.style.display = "inline-block";
                charSpan.style.opacity = '0.2';
                wordSpan.appendChild(charSpan);
            });

            newContent.appendChild(wordSpan);
            if (index < words.length - 1) {
                newContent.appendChild(document.createTextNode(' '));
            }
        });

        element.appendChild(newContent);

        // Створення спостерігача та визначення обсервера зовні
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.to(entry.target.querySelectorAll("span > span"), {
                        opacity: 1,
                        stagger: 0.1,
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: entry.target,
                            start: "top 85%",
                            end: "top 43%",
                            scrub: true,
                        }
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(element);

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            if (observer) {
                observer.disconnect();  // Перевірка, чи визначено observer
            }
        };
    }, [text]);

    return (
        <p ref={container} className={styles.split_text}>{text}</p>
    );
};

export default ScrollText;

