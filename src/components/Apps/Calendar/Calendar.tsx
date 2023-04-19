import { calendarAppStore } from '@/stores/calendar-store';
import styled from '@emotion/styled';
import { format, addMonths, startOfMonth } from 'date-fns';
import { lazy, useState } from 'react';
import { useRecoilState } from 'recoil';

type CalendarView = 'day' | 'week' | 'month' | 'year';

const MonthView = lazy(() => import('./View/Month/MonthView'));

const Calendar = () => {
    const [view] = useState<CalendarView>('month');
    const [selectedDate, setSelectedDate] = useRecoilState(calendarAppStore);

    const goPrevMonth = () => {
        setSelectedDate(addMonths(selectedDate, -1));
    };

    const goToday = () => {
        setSelectedDate(new Date());
    };

    const goNextMonth = () => {
        setSelectedDate(addMonths(selectedDate, 1));
    };

    return (
        <CalendarContainer>
            <CalendarHeader>
                <TodayYearMonth>
                    <Year>{format(selectedDate, 'yyyy')}년</Year>
                    <Month>{format(selectedDate, 'M')}월</Month>
                </TodayYearMonth>
                <MoveMonthContainer>
                    <PrevMonthButton onClick={goPrevMonth}>&lt;</PrevMonthButton>
                    <TodayButton onClick={goToday}>오늘</TodayButton>
                    <NextMonthButton onClick={goNextMonth}>&gt;</NextMonthButton>
                </MoveMonthContainer>
            </CalendarHeader>
            <MonthView />
        </CalendarContainer>
    );
};

const CalendarContainer = styled.div``;

const CalendarHeader = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

// const MonthlyView = styled.div``;

const TodayYearMonth = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Year = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: rgb(222, 221, 221);
`;

const Month = styled.div`
    padding-left: 5px;
    font-size: 2rem;
    font-weight: bold;
    color: rgb(222, 221, 221);
`;

const MoveMonthContainer = styled.div``;

const PrevMonthButton = styled.button`
    background-color: rgb(97, 86, 89);
    border-radius: 0.375rem;
    border-style: none;
    color: white;
    margin-right: 0.1rem;
    height: 20px;
`;

const TodayButton = styled.button`
    background-color: rgb(97, 86, 89);
    border-radius: 0.375rem;
    border-style: none;
    color: white;
    width: 50px;
    height: 20px;
`;

const NextMonthButton = styled.button`
    background-color: rgb(97, 86, 89);
    border-radius: 0.375rem;
    border-style: none;
    color: white;
    margin-left: 0.1rem;
    height: 20px;
`;

export default Calendar;
