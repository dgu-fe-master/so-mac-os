import { apps } from '@/data/apps/apps';
import { appID, appsRefState } from '@/stores/apps-store';
import { RefObject, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

function useDrag(ref: RefObject<HTMLElement>, appId: appID) {
    const { width = 600, height = 400, top = 100, left = 100 } = apps[appId];
    const [appsRef, setAppsRef] = useRecoilState(appsRefState);

    const [diffX, setDiffX] = useState(0);
    const [diffY, setDiffY] = useState(0);
    const [isDrag, setIsDrag] = useState(false);
    const [style, setStyle] = useState({ top, left });

    const focusInWindow = (ref: RefObject<HTMLElement>) => {
        if (ref.current) {
            ref.current.style.zIndex = '1';
        }
    };

    const focusOutWindow = (ref: RefObject<HTMLElement>) => {
        if (ref.current) {
            ref.current.style.zIndex = '0';
        }
    };

    const handleFocusWindow = () => {
        appsRef.forEach((appRef) => (ref === appRef ? focusInWindow(appRef) : focusOutWindow(appRef)));
    };

    const handleDragStart = (e: MouseEvent) => {
        const eventTarget = e.target as HTMLDivElement;
        if (eventTarget.id.includes(appId)) {
            setDiffX(e.screenX - eventTarget.getBoundingClientRect().left);
            setDiffY(e.screenY - eventTarget.getBoundingClientRect().top);
            setIsDrag(true);
            handleFocusWindow();
        }
    };

    const handleDrag = (e: MouseEvent) => {
        if (isDrag) {
            const left = e.screenX - diffX;
            const top = e.screenY - diffY;
            setStyle({
                left,
                top,
            });
        }
    };

    const handleDragStop = () => {
        setIsDrag(false);
    };

    useEffect(() => {
        if (!appsRef.includes(ref)) {
            setAppsRef([...appsRef, ref]);
        }
    }, []);

    useEffect(() => {
        const element = ref.current;
        if (element) {
            element.addEventListener('mousedown', handleDragStart);
            element.addEventListener('mousemove', handleDrag);
            element.addEventListener('mouseup', handleDragStop);

            return () => {
                element.removeEventListener('mousedown', handleDragStart);
                element.removeEventListener('mousemove', handleDrag);
                element.removeEventListener('mouseup', handleDragStop);
            };
        }
    }, [diffX, diffY, isDrag, style, appsRef]);

    return { width, height, style };
}

export default useDrag;
