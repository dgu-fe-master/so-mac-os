import { ReactElement } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as AirdropIcon } from '@/assets/icons/airdrop.svg';
import { ReactComponent as RecentIcon } from '@/assets/icons/recent.svg';
import { ReactComponent as AppStoreIcon } from '@/assets/icons/app-store.svg';
import { ReactComponent as DocIcon } from '@/assets/icons/document.svg';
import { ReactComponent as WindowDesktopIcon } from '@/assets/icons/window-desktop.svg';
import { ReactComponent as DownloadIcon } from '@/assets/icons/download.svg';
import { ReactComponent as CloudIcon } from '@/assets/icons/i-cloud.svg';
import { ReactComponent as SharingIcon } from '@/assets/icons/sharing-folder.svg';
import SidebarItem from '@/components/Apps/Finder/Sidebar/SidebarItem';

export interface FinderItemConfig {
    title: string;
    icon: ReactElement;
}

const finderSidebarContents: Record<string, Record<string, FinderItemConfig>> = {
    즐겨찾기: {
        airdrop: { title: 'AirDrop', icon: <AirdropIcon /> },
        recent: { title: '최근 항목', icon: <RecentIcon /> },
        applications: { title: '응용 프로그램', icon: <AppStoreIcon /> },
        docs: { title: '문서', icon: <DocIcon /> },
        desktop: { title: '데스크탑', icon: <WindowDesktopIcon /> },
        download: { title: '다운로드', icon: <DownloadIcon /> },
    },
    iCloud: {
        iCloudDrive: { title: 'iCloud Drive', icon: <CloudIcon /> },
        sharing: { title: '공유', icon: <SharingIcon /> },
    },
};

const Sidebar = () => {
    return (
        <SidebarContainer>
            {Object.entries(finderSidebarContents).map(([title, items]) => (
                <SidebarList key={title}>
                    <SidebarGroupTitle>{title}</SidebarGroupTitle>
                    {Object.keys(items).map((key: string) => (
                        <SidebarItem key={key} item={items[key]} />
                    ))}
                </SidebarList>
            ))}
        </SidebarContainer>
    );
};

export default Sidebar;

const SidebarContainer = styled.div`
    background-color: rgba(219, 219, 222, 0.7);
    width: 120px;
    border-radius: 0.5rem 0 0 0.5rem;
    padding: 60px 20px 0 20px;
    border-right: 1px solid #d4d4d4;
`;

const SidebarList = styled.ul`
    :not(:last-child) {
        margin-bottom: 30px;
    }
`;

const SidebarGroupTitle = styled.p`
    color: #aaabac;
    font-size: 0.8em;
    font-weight: 700;
    margin-bottom: 10px;
`;
