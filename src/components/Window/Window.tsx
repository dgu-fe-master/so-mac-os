import styled from '@emotion/styled';
import { appID } from '@/stores/apps-store';
import { createPortal } from 'react-dom';
import { apps } from '@/data/apps/apps';
import WindowControl from '@/components/Window/WindowControl';

interface WindowProps {
    appId: appID;
}

const Window = ({ appId }: WindowProps) => {
    const { width, height } = apps[appId];

    return createPortal(
        <WindowWrapper width={width ?? 600} height={height ?? 400}>
            <WindowControl appId={appId} />
            {/* 여기 안에서 해당하는 APP 넣기*/}
        </WindowWrapper>,
        document.body
    );
};

interface WindowWrapperProps {
    width: number;
    height: number;
}

const WindowWrapper = styled.div<WindowWrapperProps>`
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transform: translate(-50%, -50%);
    transition: all 300ms ease-in-out;
    border-radius: 0.5rem;
    background-color: #fff;
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    padding: 1em;
    user-select: none;
`;

export default Window;
