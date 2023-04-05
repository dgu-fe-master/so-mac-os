import styled from '@emotion/styled';
import ActionCenter from '@/components/TopBar/ActionCenter/ActionCenter';
import MenuBar from '@/components/TopBar/MenuBar/MenuBar';
import TopBarTime from '@/components/TopBar/TopBarTime';

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
