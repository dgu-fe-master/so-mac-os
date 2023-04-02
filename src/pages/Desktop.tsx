import { useRef } from 'react';
import styled from '@emotion/styled';
import baclgroundImgUrl from '@/assets/images/background-1.jpeg';
import Dock from '@/components/Dock/Dock';
import TopBar from '@/components/TopBar/TopBar';
import WindowArea from '@/components/Window/WindowArea';
import ContextMenu from '@/components/Desktop/ContextMenu';

const DesktopPage = () => {
    const ref = useRef<HTMLElement>(null);

    return (
        <DesktopContainer ref={ref}>
            <ContextMenu outerRef={ref} />
            <TopBar />
            <WindowArea />
            <Dock />
        </DesktopContainer>
    );
};

const DesktopContainer = styled.main`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url(${baclgroundImgUrl});
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default DesktopPage;
