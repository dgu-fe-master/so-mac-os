import styled from '@emotion/styled';

interface Props {
    weekname: string;
}

const WeekBox = ({ weekname }: Props) => {
    return <Container>{weekname}</Container>;
};

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 1rem;
    color: rgb(223, 221, 221);

    &:nth-of-type(1) {
        color: rgb(153, 148, 146);
    }
    &:nth-of-type(7) {
        color: rgb(153, 148, 146);
    }
    &:nth-of-type(-n + 7) {
        margin-bottom: 10px;
    }
`;

export default WeekBox;
