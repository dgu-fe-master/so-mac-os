import styled from '@emotion/styled';
import { appID } from '@/stores/apps-store';
import { createPortal } from 'react-dom';
import { AppConfig, apps } from '@/data/apps/apps';
import WindowControl from '@/components/Window/WindowControl';
import { MouseEvent, useState } from 'react';

interface WindowProps {
    appId: appID;
}

const Window = ({ appId }: WindowProps) => {
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

    return createPortal(
        <WindowWrapper
            width={width}
            height={height}
            style={style}
            onMouseDown={handleDragStart}
            onMouseMove={handleDrag}
            onMouseUp={handleDragStop}
        >
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
`;

export default Window;
