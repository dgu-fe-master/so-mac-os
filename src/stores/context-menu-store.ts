import { atom } from 'recoil';

export const activeContextMenuStore = atom<string | null>({
    key: 'activeContextMenuStore',
    default: null,
});
