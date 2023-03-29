import { finderMenu, MenuConfig } from '@/data/menu/finder';
import { atom } from 'recoil';

export type MenuID = keyof typeof finderMenu;

export const topBarMenuStore = atom<Record<string, MenuConfig>>({
    key: 'menu',
    default: finderMenu,
});

export const activeMenuStore = atom<MenuID | ''>({
    key: 'activeMenuStore',
    default: '',
});
