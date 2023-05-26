import { atom } from 'recoil';

export const calendarAppStore = atom<Date>({
    key: 'selectDate',
    default: new Date(),
});
