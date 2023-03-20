import styled from '@emotion/styled';
import { apps } from '@/data/apps/apps';
import DockItem from '@/components/Dock/DockItem';

const Dock = () => (
    <DockWrapper>
        <DockContainer>
            {Object.keys(apps).map((app) => (
                <DockItem key={app} id={app} />
            ))}
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

export default Dock;
