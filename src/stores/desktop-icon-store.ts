import { apps } from '@/data/apps/apps';
import { atom } from 'recoil';

export interface DesktopIcon {
    name: string;
    type: keyof typeof apps | 'browser';
}

export const desktopIconStore = atom<Array<DesktopIcon>>({
    key: 'desktopIconStore',
    default: [
        { name: '무제 폴더', type: 'finder' },
        { name: 'so-mac-os-github', type: 'browser' },
    ],
});

export const activeIconStore = atom<DesktopIcon | null>({
    key: 'activeIconStore',
    default: null,
});
