import styled from '@emotion/styled';
import finderIcon from '@/assets/icons/finder.png';
import calculatorIcon from '@/assets/icons/calculator.png';
import githubIcon from '@/assets/icons/github.png';
import notionIcon from '@/assets/icons/notion.png';
import mailIcon from '@/assets/icons/mail.png';
import messageIcon from '@/assets/icons/message.png';
import photoIcon from '@/assets/icons/photo.png';
import systemPreferenceIcon from '@/assets/icons/system-preferences.png';
import calendarIcon from '@/assets/icons/calendar.png';
import photoBoothIcon from '@/assets/icons/photo-booth.png';
import memoIcon from '@/assets/icons/memo.png';
import safariIcon from '@/assets/icons/safari.png';

const Dock = () => (
    <DockWrapper>
        <DockContainer>
            <DockIcon src={finderIcon} alt="finder" />
            <DockIcon src={safariIcon} alt="safari" />
            <DockIcon src={calculatorIcon} alt="calculator" />
            <DockIcon src={memoIcon} alt="memo" />
            <DockIcon src={calendarIcon} alt="calendar" />
            <DockIcon src={mailIcon} alt="mail" />
            <DockIcon src={messageIcon} alt="message" />
            <DockIcon src={photoIcon} alt="photo" />
            <DockIcon src={photoBoothIcon} alt="photo booth" />
            <DockIcon src={notionIcon} alt="notion" />
            <DockIcon src={githubIcon} alt="github" />
            <DockIcon src={systemPreferenceIcon} alt="system prefernce" />
        </DockContainer>
    </DockWrapper>
);

const DockWrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
`;

const DockContainer = styled.div`
    background-color: rgba(256, 256, 256, 0.2);
    border-radius: 20px;
    padding: 0.2em;
    margin-bottom: 0.5em;
`;

const DockIcon = styled.img`
    width: 50px;
    height: 50px;
    margin: 0.3em;
`;

export default Dock;
