import styled from '@emotion/styled';
import { appID } from '@/stores/apps-store';
import { createPortal } from 'react-dom';
import { AppConfig } from '@/data/apps/apps';
import WindowControl from '@/components/Window/WindowControl';
import useDrag from '@/hooks/useDrag';
import { useRef } from 'react';

interface WindowProps {
    appId: appID;
}

const Window = ({ appId }: WindowProps) => {
    const windowRef = useRef<HTMLDivElement>(null);
    const { width, height, style } = useDrag(windowRef, appId);

    return createPortal(
        <WindowWrapper id={`${appId}-window`} ref={windowRef} width={width} height={height} style={style}>
            <WindowControl appId={appId} />
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
