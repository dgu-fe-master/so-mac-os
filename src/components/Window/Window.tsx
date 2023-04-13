import styled from '@emotion/styled';
import { appID } from '@/stores/apps-store';
import { createPortal } from 'react-dom';
import { AppConfig, apps } from '@/data/apps/apps';
import WindowControl from '@/components/Window/WindowControl';
import useDrag from '@/hooks/useDrag';
import { Suspense, useRef } from 'react';
import { AppNexus } from '@/components/Apps/AppNexus';

interface WindowProps {
    appId: appID;
}

const Window = ({ appId }: WindowProps) => {
    const windowRef = useRef<HTMLDivElement>(null);
    const { style } = useDrag(windowRef, appId);
    const { width = 400, height = 600, backgroundColor = '#fff' } = apps[appId];

    return createPortal(
        <WindowWrapper
            id={`${appId}-window`}
            ref={windowRef}
            width={width}
            height={height}
            style={style}
            backgroundColor={backgroundColor}
        >
            <WindowControl appId={appId} />
            <Suspense fallback={<span></span>}>
                <AppNexus appId={appId} />
            </Suspense>
        </WindowWrapper>,
        document.body
    );
};

type WindowWrapperProps = Pick<AppConfig, 'width' | 'height' | 'backgroundColor'>;

const WindowWrapper = styled.div<WindowWrapperProps>`
    border-radius: 0.5rem;
    background-color: ${({ backgroundColor }) => backgroundColor};
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    backdrop-filter: blur(10px);
    position: absolute;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 2;
`;

export default Window;
