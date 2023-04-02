import styled from '@emotion/styled';
import { appID } from '@/stores/apps-store';
import { createPortal } from 'react-dom';
import { AppConfig } from '@/data/apps/apps';
import WindowControl from '@/components/Window/WindowControl';
import useDrag from '@/hooks/useDrag';

interface WindowProps {
    appId: appID;
}

const Window = ({ appId }: WindowProps) => {
    const { width, height, style } = useDrag(appId);

    return createPortal(
        <WindowWrapper width={width} height={height} style={style}>
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
