"use client";
import { useState, useEffect } from 'react';

type WindowSize = {
    width: number | undefined;
};

function useWindowSize() {
    const [size, setSize] = useState<WindowSize>({
        width: undefined,
    });

    useEffect(() => {
        function updateSize() {
            setSize({
                width: window.innerWidth,
            });
        }

        window.addEventListener('resize', updateSize);
        updateSize(); // ініціалізація при завантаженні

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
}

export default useWindowSize;