import styled from '@emotion/styled';
import { lazy } from 'react';

const DateBox = lazy(() => import('./DateBox'));

const MonthView = () => {
    return (
        <Container>
            <DateBox />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export default MonthView;
