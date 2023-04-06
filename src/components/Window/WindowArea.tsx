import styled from '@emotion/styled';
import { apps } from '@/data/apps/apps';
import { useRecoilState, useRecoilValue } from 'recoil';
import { appID, focusAppState, focusAppZIndexState, openAppsState } from '@/stores/apps-store';
import Window from '@/components/Window/Window';
import { useEffect } from 'react';

const WindowArea = () => {
    const openApps = useRecoilValue<Record<appID, boolean>>(openAppsState);
    const focusApp = useRecoilValue(focusAppState);
    const [focusAppZIndex, setFocusAppZIndex] = useRecoilState(focusAppZIndexState);

    useEffect(() => {
        setFocusAppZIndex(focusAppZIndex + 1);
    }, [focusApp]);

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
