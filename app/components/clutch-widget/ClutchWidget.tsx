import styles from "./style.module.scss";

const ClutchWidget = () => {

    return (
        <>
                <script
                    type="text/javascript"
                    src="https://widget.clutch.co/static/js/widget.js"
                    async
                ></script>
            <div
                className={`${styles.clutchWidget} clutch-widget`}
                data-url="https://widget.clutch.co"
                data-widget-type="1"
                data-height="45"
                data-nofollow="true"
                data-expandifr="true"
                data-clutchcompany-id="2310960"
            ></div>
        </>
    );
};

export default ClutchWidget;
