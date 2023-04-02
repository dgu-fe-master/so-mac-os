import styled from '@emotion/styled';
import ActionCenter from './ActionCenter/ActionCenter';
import MenuBar from './MenuBar/MenuBar';
import TopBarTime from './TopBarTime';

const TopBar = () => {
    return (
        <TopBarWrapper>
            <MenuBar />
            <RightWrapper>
                <ActionCenter />
                <TopBarTime />
            </RightWrapper>
        </TopBarWrapper>
    );
};

const TopBarWrapper = styled.header`
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
`;

const RightWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export default TopBar;
