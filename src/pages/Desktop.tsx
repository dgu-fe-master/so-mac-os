import styled from '@emotion/styled';
import baclgroundImgUrl from '@/assets/images/background-1.jpeg';
import Dock from '@/components/Dock/Dock';
import TopBar from '@/components/TopBar/TopBar';
import WindowArea from '@/components/Window/WindowArea';

const DesktopPage = () => {
    return (
        <DesktopContainer>
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
