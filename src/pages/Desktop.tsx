import styled from '@emotion/styled';
import baclgroundImgUrl from '@/assets/images/background-1.jpeg';

const DesktopPage = () => {
    return <DesktopContainer></DesktopContainer>;
};

const DesktopContainer = styled.main`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url(${baclgroundImgUrl});
`;

export default DesktopPage;
