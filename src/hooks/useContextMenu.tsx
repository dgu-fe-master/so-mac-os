import { RefObject, useEffect, useState, useCallback } from 'react';
import { activeContextMenuStore } from '@/stores/context-menu-store';
import { useSetRecoilState } from 'recoil';

export interface Coordinate {
    xPos: number;
    yPos: number;
}

function useContextMenu<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, name: string) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [coords, setCoords] = useState<Coordinate>({ xPos: 0, yPos: 0 });

    const handleClick = () => setIsVisible(false);

    const setActiveContextMenu = useSetRecoilState(activeContextMenuStore);

    const handleContextMenu = useCallback((event: MouseEvent) => {
        event.preventDefault();

        const el = ref?.current;
        if (!el || !el.contains(event.target as HTMLElement)) {
            setIsVisible(false);
            return;
        }

        let x = event.pageX;
        let y = event.pageY;

        // 윈도우 사이즈를 벗어나는 위치의 경우 좌표 수정
        if (window.innerWidth - x < 200) x -= 200;
        if (window.innerHeight - y < 180) y -= 180;

        setCoords({ xPos: x, yPos: y });

        setIsVisible(true);
        setActiveContextMenu(name);
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
