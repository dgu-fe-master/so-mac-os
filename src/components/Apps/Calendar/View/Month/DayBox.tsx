import { calendarAppStore } from '@/stores/calendar-store';
import styled from '@emotion/styled';
import { getDate, getMonth, isSameDay, isSameMonth } from 'date-fns';
import { useRecoilState } from 'recoil';

interface DayProps {
    sameMonth: boolean;
    sameDay: boolean;
}

interface DayBoxProps {
    day: Date;
}

const DayBox = ({ day }: DayBoxProps) => {
    const today = new Date();
    const [selectedDate] = useRecoilState(calendarAppStore);

    const sameMonth = isSameMonth(day, selectedDate);
    const sameDay = isSameDay(day, today);

    return (
        <Container>
            <Day sameMonth={sameMonth} sameDay={sameDay}>
                {getDate(day) === 1 ? (
                    <SameDayCheck sameMonth={sameMonth} sameDay={sameDay}>
                        {getMonth(day) + 1}월 {getDate(day)}
                    </SameDayCheck>
                ) : (
                    <SameDayCheck sameMonth={sameMonth} sameDay={sameDay}>
                        {getDate(day)}
                    </SameDayCheck>
                )}
                일
            </Day>
        </Container>
    );
};

const Container = styled.div`
    border: 1px solid rgb(64, 64, 64);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Day = styled.div<DayProps>`
    display: flex;
    justify-content: flex-end;
    width: 120px;
    height: 70px;
    padding: 3px 3px 0 0;
    color: ${({ sameMonth }) => (sameMonth ? 'rgb(223,221,220)' : 'rgb(97,88,85)')};
`;

const SameDayCheck = styled.div<DayProps>`
    border-radius: ${({ sameMonth, sameDay }) => (sameMonth && sameDay ? `50%` : '0px')};
    background-color: ${({ sameMonth, sameDay }) => (sameMonth && sameDay ? 'rgb(161,58,47)' : '')};
    color: ${({ sameMonth, sameDay }) => (sameMonth && sameDay ? 'black' : '')};
    height: 20px;
`;

export default DayBox;
