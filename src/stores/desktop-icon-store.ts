import { atom } from 'recoil';

export interface DesktopIcon {
    name: string;
    type: string;
}

export const desktopIconStore = atom<Array<DesktopIcon>>({
    key: 'desktopIconStore',
    default: [
        { name: '무제 폴더', type: 'folder' },
        { name: '무제 폴더 2', type: 'folder' },
        { name: '무제 폴더 3', type: 'folder' },
    ],
});

export const activeIconStore = atom<DesktopIcon | null>({
    key: 'activeIconStore',
    default: null,
});
