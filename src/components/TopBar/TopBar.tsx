import styled from '@emotion/styled';
import MenuBar from './MenuBar/MenuBar';

const TopBar = () => {
    return (
        <TopBarWrapper>
            <MenuBar />
        </TopBarWrapper>
    );
};

const TopBarWrapper = styled.header`
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
`;

export default TopBar;
