"use client"
import styles from "./style.module.scss";
import { useEffect } from 'react';

const ClutchWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://widget.clutch.co/static/js/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className={`${styles.clutchWidget} clutch-widget`}
            data-url="https://widget.clutch.co"
            data-widget-type="1"
            data-height="45"
            data-nofollow="true"
            data-expandifr="true"
            data-clutchcompany-id="2310960"
        ></div>
    );
};

export default ClutchWidget;