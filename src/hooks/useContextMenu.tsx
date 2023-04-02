import { RefObject, useEffect, useState, useCallback } from 'react';

export interface Coordinate {
    xPos: number;
    yPos: number;
}

function useContextMenu<T extends HTMLElement = HTMLElement>(ref: RefObject<T>) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [coords, setCoords] = useState<Coordinate>({ xPos: 0, yPos: 0 });

    const handleClick = () => setIsVisible(false);

    const handleContextMenu = useCallback((event: MouseEvent) => {
        event.preventDefault();

        const el = ref?.current;
        if (!el || !el.contains(event.target as HTMLElement)) {
            setIsVisible(false);
            return;
        }

        setCoords({ xPos: event.pageX, yPos: event.pageY });

        setIsVisible(true);
        return;
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleClick);
        document.addEventListener('contextmenu', handleContextMenu);

        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    return { coords, isVisible, setIsVisible };
}

export default useContextMenu;
