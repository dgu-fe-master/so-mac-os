import { getDay, getMonth, getYear, startOfMonth } from 'date-fns';
import { DAYS, LEAP_DAYS, DAY_OF_THE_WEEK } from './constants';

export function isLeap(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
