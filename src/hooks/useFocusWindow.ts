import { appsRefState } from '@/stores/apps-store';
import { RefObject } from 'react';
import { useRecoilValue } from 'recoil';

function useFocusWindow() {
    const appsRef = useRecoilValue(appsRefState);
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

    const handleFocusWindow = (appId: string) => {
        appsRef.forEach((appRef) =>
            appRef.current && appRef.current.id.includes(appId) ? focusInWindow(appRef) : focusOutWindow(appRef)
        );
    };

    return { handleFocusWindow };
}

export default useFocusWindow;
