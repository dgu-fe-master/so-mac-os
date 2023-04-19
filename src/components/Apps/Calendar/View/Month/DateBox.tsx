import styled from '@emotion/styled';
import { DAY_OF_THE_WEEK } from '../../constants';
import { lazy } from 'react';

const WeekBox = lazy(() => import('./WeekBox'));

const DateBox = () => {
    return (
        <Container>
            {DAY_OF_THE_WEEK.map((week) => {
                return <WeekBox key={week} weekname={week} />;
            })}
            {/* 전체 날짜 출력 */}
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
