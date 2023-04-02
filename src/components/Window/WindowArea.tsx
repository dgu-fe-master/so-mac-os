import { useRef } from 'react';
import styled from '@emotion/styled';
import { apps } from '@/data/apps/apps';
import { useRecoilValue } from 'recoil';
import { appID, openAppsState } from '@/stores/apps-store';
import { DesktopIcon, desktopIconStore } from '@/stores/desktop-icon-store';
import Window from '@/components/Window/Window';
import WindowIcon from './WindowIcon';
import ContextMenu from '@/components/Desktop/ContextMenu';
import { contextMenu } from '@/data/menu/context';

const WindowArea = () => {
    const ref = useRef<HTMLElement>(null);
    const openApps = useRecoilValue<Record<appID, boolean>>(openAppsState);
    const desktopIcons = useRecoilValue<Array<DesktopIcon>>(desktopIconStore);

    return (
        <WindowAreaContainer ref={ref}>
            <ContextMenu name="default" outerRef={ref} menus={contextMenu.default} />
            <DesktopSection>
                {desktopIcons.map((icon: any) => (
                    <WindowIcon key={icon.name} icon={icon} />
                ))}
            </DesktopSection>
            {Object.keys(apps).map((app: appID) => openApps[app] && <Window key={app} appId={app} />)}
        </WindowAreaContainer>
    );
};

const WindowAreaContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const DesktopSection = styled.section`
    width: 100%;
    height: 100%;
    padding: 15px;

    // 바탕화면 스택 정렬 시
    display: grid;
    grid-template-columns: repeat(auto-fit, 110px);
    grid-template-rows: repeat(auto-fit, 110px);
    row-gap: 10px;
    column-gap: 10px;
    grid-auto-flow: column;
    direction: rtl;
`;

export default WindowArea;
