import { calendarAppStore } from '@/stores/calendar-store';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { lazy } from 'react';

const DateBox = lazy(() => import('./DateBox'));

const MonthView = () => {
    const [selectedDate] = useRecoilState(calendarAppStore);

    return (
        <Container>
            <DateBox selectedDate={selectedDate} />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export default MonthView;
