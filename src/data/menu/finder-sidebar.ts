interface FinderItemConfig {
    title: string;
    icon: string;
    disabled?: boolean;
}

interface FinderSidebarConfig {
    title: string;
    items: Record<string, FinderItemConfig>;
}

const finderSidebarContents: Record<string, FinderSidebarConfig> = {
    favorites: {
        title: '즐겨찾기',
        items: {
            airdrop: { title: 'AirDrop', icon: 'airdrop' },
            recent: { title: '최근 항목', icon: 'recent' },
            applications: { title: '응용 프로그램', icon: 'app-store' },
            docs: { title: '문서', icon: 'document' },
            desktop: { title: '데스크탑', icon: 'window-desktop' },
            download: { title: '다운로드', icon: 'download' },
        },
    },
    'i-cloud': {
        title: 'iCloud',
        items: {
            iCloudDrive: { title: 'iCloud Drive', icon: 'i-cloud', disabled: true },
            sharing: { title: '공유', icon: 'sharing-folder', disabled: true },
        },
    },
};

export { finderSidebarContents };
export type { FinderItemConfig, FinderSidebarConfig };
