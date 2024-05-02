"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import {string} from "prop-types";


type Props = {
    children: any;
}

function SmoothScrolling({children}: Props) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;