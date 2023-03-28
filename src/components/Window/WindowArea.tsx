import styled from '@emotion/styled';
import { apps } from '@/data/apps/apps';
import { useRecoilValue } from 'recoil';
import { appID, openAppsState } from '@/stores/apps-store';
import Window from '@/components/Window/Window';

const WindowArea = () => {
    const openApps = useRecoilValue<Record<appID, boolean>>(openAppsState);
    return (
        <WindowAreaContainer>
            {Object.keys(apps).map((app: appID) => openApps[app] && <Window key={app} appId={app} />)}
        </WindowAreaContainer>
    );
};

const WindowAreaContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export default WindowArea;
