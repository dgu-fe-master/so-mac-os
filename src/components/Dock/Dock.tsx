import styled from '@emotion/styled';
import { apps } from '@/data/apps/apps';
import DockItem from '@/components/Dock/DockItem';
import { useRecoilValue } from 'recoil';
import { openAppsState } from '@/stores/apps-store';

const Dock = () => {
    const openApps = useRecoilValue(openAppsState);
    return (
        <DockWrapper>
            <DockContainer>
                {Object.keys(apps).map((app) => (
                    <DockItem key={app} id={app} isOpenApp={openApps[app]} />
                ))}
            </DockContainer>
        </DockWrapper>
    );
};

const DockWrapper = styled.section`
    width: 100%;
    gap: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const DockContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgba(256, 256, 256, 0.2);
    width: fit-content;
    height: 63px;
    border-radius: 20px;
    padding: 0.2em;
    margin-bottom: 0.5em;
`;

export default Dock;
