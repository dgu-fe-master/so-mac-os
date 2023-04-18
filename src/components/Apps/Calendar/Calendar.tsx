import { calendarAppStore } from '@/stores/calendar-store';
import styled from '@emotion/styled';
import { format } from 'date-fns';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

type CalendarView = 'day' | 'week' | 'month' | 'year';

const Calendar = () => {
    const [view] = useState<CalendarView>('month');
    const [selectedDate, setSelectedDate] = useRecoilState(calendarAppStore);

    return (
        <CalendarContainer>
            <CalendarHeader>
                <TodayYearMonth>
                    <Year>{format(selectedDate, 'yyyy')}년</Year>
                    <Month>{format(selectedDate, 'M')}월</Month>
                </TodayYearMonth>
                <MoveMonthContainer>
                    <PrevMonthButton>&lt;</PrevMonthButton>
                    <TodayButton>오늘</TodayButton>
                    <NextMonthButton>&gt;</NextMonthButton>
                </MoveMonthContainer>
            </CalendarHeader>
            <MonthlyView></MonthlyView>
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

const MonthlyView = styled.div``;

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
