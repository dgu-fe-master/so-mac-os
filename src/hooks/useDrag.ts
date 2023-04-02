import { apps } from '@/data/apps/apps';
import { appID } from '@/stores/apps-store';
import { useEffect, useState } from 'react';

function useDrag(appId: appID) {
    const { width = 600, height = 400, top = 100, left = 100 } = apps[appId];

    const [diffX, setDiffX] = useState(0);
    const [diffY, setDiffY] = useState(0);
    const [isDrag, setIsDrag] = useState(false);
    const [style, setStyle] = useState({ top, left });

    const handleDragStart = (e: MouseEvent) => {
        const eventTarget = e.target as HTMLDivElement;
        setDiffX(e.screenX - eventTarget.getBoundingClientRect().left);
        setDiffY(e.screenY - eventTarget.getBoundingClientRect().top);
        setIsDrag(true);
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
        document.addEventListener('mousedown', handleDragStart);
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', handleDragStop);

        return () => {
            document.removeEventListener('mousedown', handleDragStart);
            document.removeEventListener('mousemove', handleDrag);
            document.removeEventListener('mouseup', handleDragStop);
        };
    }, [diffX, diffY, isDrag, style]);

    return { width, height, style };
}

export default useDrag;
