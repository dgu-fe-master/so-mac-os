import styled from '@emotion/styled';
import { ReactComponent as ArrowForwardIcon } from '@/assets/icons/arrow-forward.svg';
import { ReactComponent as ArrowBackIcon } from '@/assets/icons/arrow-back.svg';
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';
import { ReactComponent as SharingIcon } from '@/assets/icons/sharing.svg';
import { ReactComponent as TagIcon } from '@/assets/icons/tag.svg';
import IconButton from '@/components/Apps/Finder/TitleBar/IconButton';

const TitleBar = () => {
    return (
        <TitleBarContainer>
            <ArrowGroup>
                <IconButton icon={<ArrowBackIcon />} disabled />
                <IconButton icon={<ArrowForwardIcon />} disabled />
            </ArrowGroup>
            <Title>무제 폴더</Title>
            <ControlGroup>
                <IconButton icon={<SharingIcon />} disabled />
                <IconButton icon={<TagIcon />} disabled />
            </ControlGroup>
            <IconButton icon={<SearchIcon />} />
        </TitleBarContainer>
    );
};

export default TitleBar;

const TitleBarContainer = styled.div`
    background-color: #f5f5f6;
    padding: 10px 15px;
    border-bottom: 1px solid #d4d4d4;
    border-top-right-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    pointer-events: none; // TODO: 드래그 동작되도록 고민
`;

const ArrowGroup = styled.div`
    width: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

const Title = styled.span`
    color: #4a4a4b;
    font-size: 1em;
    font-weight: 600;
    width: -webkit-fill-available;
`;

const ControlGroup = styled.div`
    width: 65px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-right: 50px;
    align-items: center;
`;
