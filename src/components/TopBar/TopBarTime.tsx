import { useState } from 'react';
import styled from '@emotion/styled';
import useInterval from '@/hooks/useInterval';
import { format, getDay } from 'date-fns';

const TopBarTime = () => {
    const [time, setTime] = useState<Date>(new Date());

    useInterval(() => setTime(new Date()), 2000);

    const numberToKRDay = ['일', '월', '화', '수', '목', '금', '토'] as const;

    return (
        <TimeButton>
            {format(time, 'M월 dd일')} ({numberToKRDay[getDay(time)]}) {format(time, 'aaa') === 'am' ? '오전' : '오후'}{' '}
            {format(time, 'HH:mm')}
        </TimeButton>
    );
};
export default TopBarTime;

const TimeButton = styled.button`
    display: flex;
    align-items: center;
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: default;
    padding: 4px 10px;
    color: white;
    border-radius: 5px;
    height: 100%;
`;
