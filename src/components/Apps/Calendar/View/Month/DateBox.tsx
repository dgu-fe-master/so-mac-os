import styled from '@emotion/styled';
import { DAY_OF_THE_WEEK } from '../../constants';
import { lazy } from 'react';
import { getMonth, getTime, getYear } from 'date-fns';

const WeekBox = lazy(() => import('./WeekBox'));
const DayBox = lazy(() => import('./DayBox'));

interface Props {
    selectedDate: Date;
}

const monthList = (selectedDate: Date) => {
    const thisYear = getYear(selectedDate);
    const thisMonth = getMonth(selectedDate);

    const dayOneWeek = new Date(thisYear, thisMonth, 1).getDay();

    const result: Date[] = [];

    const prevMonthEnd = new Date(thisYear, thisMonth, 0).getDate();
    const thisMonthEnd = new Date(thisYear, thisMonth + 1, 0).getDate();

    for (let i = dayOneWeek - 1; i >= 0; i--) {
        result.push(new Date(thisYear, thisMonth - 1, prevMonthEnd - i));
    }

    for (let i = 1; i <= thisMonthEnd; i++) {
        result.push(new Date(thisYear, thisMonth, i));
    }

    for (let i = 1; i < 42 - (thisMonthEnd + dayOneWeek) + 1; i++) {
        result.push(new Date(thisYear, thisMonth + 1, i));
    }
    return result;
};

const DateBox = ({ selectedDate }: Props) => {
    const days: Date[] = monthList(selectedDate);
    return (
        <Container>
            {DAY_OF_THE_WEEK.map((week) => {
                return <WeekBox key={week} weekname={week} />;
            })}
            {/* 전체 날짜 출력 */}
            {days.map((day) => {
                return <DayBox key={getTime(day)} day={day} selectedDate={selectedDate} />;
            })}
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    flex: 1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export default DateBox;
