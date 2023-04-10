import styled from '@emotion/styled';
import { appID, focusAppState, focusAppZIndexState } from '@/stores/apps-store';
import { createPortal } from 'react-dom';
import { AppConfig, apps } from '@/data/apps/apps';
import WindowControl from '@/components/Window/WindowControl';
import useDrag from '@/hooks/useDrag';
import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

interface WindowProps {
    appId: appID;
}

const Window = ({ appId }: WindowProps) => {
    const windowRef = useRef<HTMLDivElement>(null);
    const { width = 600, height = 400 } = apps[appId];
    const { style } = useDrag(windowRef, appId);
    const focusApp = useRecoilValue(focusAppState);
    const [zIndex, setZIndex] = useState(0);
    const focusAppZIndex: number = useRecoilValue(focusAppZIndexState);
    const [isMaxApp, setIsMaxApp] = useState(false);

    useEffect(() => {
        if (focusApp === appId) setZIndex(focusAppZIndex);
    }, [focusApp]);

    const handleMaxmizeApp = () => {
        if (windowRef.current) {
            if (isMaxApp) {
                windowRef.current.style.width = `${width}px`;
                windowRef.current.style.height = `${height}px`;
                windowRef.current.style.left = `${style.left}px`;
                windowRef.current.style.top = `${style.top}px`;
            } else {
                windowRef.current.style.width = '100%';
                windowRef.current.style.height = '100%';
                windowRef.current.style.left = '0px';
                windowRef.current.style.top = '0px';
            }
            setIsMaxApp(!isMaxApp);
        }
    };

    const handleMinimizeApp = () => {
        //todo - 창 최소화하기
    };

    return createPortal(
        <WindowWrapper
            id={`${appId}-window`}
            ref={windowRef}
            width={width}
            height={height}
            style={{
                left: `${style.left}px`,
                top: `${style.top}px`,
                zIndex: `${zIndex}`,
            }}
        >
            <WindowControl appId={appId} handleMaxmizeApp={handleMaxmizeApp} handleMinimizeApp={handleMinimizeApp} />
            {/* 여기 안에서 해당하는 APP 넣기*/}
        </WindowWrapper>,
        document.body
    );
};

type WindowWrapperProps = Pick<AppConfig, 'width' | 'height'>;

const WindowWrapper = styled.div<WindowWrapperProps>`
    border-radius: 0.5rem;
    background-color: #fff;
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    padding: 1em;
    position: absolute;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 2;
`;

export default Window;
