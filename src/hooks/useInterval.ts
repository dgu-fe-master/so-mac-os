import { useEffect, useRef } from 'react';

function useInterval(callback: () => void, delay: number | null) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const savedCallback = useRef<Function>(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!delay && delay !== 0) return;

        const id = setInterval(() => savedCallback.current(), delay);

        return () => clearInterval(id);
    }, [delay]);
}

export default useInterval;
