import { apps } from '@/data/apps/apps';
import { RefObject } from 'react';
import { atom } from 'recoil';

export type appID = keyof typeof apps;

export const openAppsState = atom<Record<appID, boolean>>({
    key: 'openAppsState',
    default: {
        finder: false,
        calculator: false,
        calendar: false,
        github: false,
        mail: false,
        memo: false,
        message: false,
        notion: false,
        'photo-booth': false,
        photo: false,
        safari: false,
        'system-preferences': false,
    },
});

export const appsRefState = atom<RefObject<HTMLElement>[]>({
    key: 'appsRefState',
    default: [],
});
