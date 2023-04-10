import styled from '@emotion/styled';
import { TbPlusMinus } from 'react-icons/tb';

const Calculator = () => {
    return (
        <CalculatorContainer>
            <ResultContainer></ResultContainer>
            <ButtonContainer>
                <button>{'AC'}</button>
                <button>
                    <TbPlusMinus />
                </button>
                <button>{'%'}</button>
                <button>{'÷'}</button>
                <button>{'7'}</button>
                <button>{'8'}</button>
                <button>{'9'}</button>
                <button>{'×'}</button>
                <button>{'4'}</button>
                <button>{'5'}</button>
                <button>{'6'}</button>
                <button>{'-'}</button>
                <button>{'1'}</button>
                <button>{'2'}</button>
                <button>{'3'}</button>
                <button>{'+'}</button>
                <button>{'0'}</button>
                <button>{'.'}</button>
                <button>{'='}</button>
            </ButtonContainer>
        </CalculatorContainer>
    );
};

const CalculatorContainer = styled.div``;

const ResultContainer = styled.div`
    height: 40px;
    padding: 0 1em;
`;

const ButtonContainer = styled.div`
    height: calc(290px - 52px);
    border-radius: 0 0 0.5rem 0.5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    > button {
        background-color: rgba(240, 240, 240, 0.3);
        border: 0.5px solid rgba(50, 50, 50, 0.8);
        color: white;
        font-size: 1.3rem;
        :active {
            background-color: rgba(250, 250, 250, 0.5);
        }
        &:nth-child(17) {
            grid-column: 1 / span 2;
            border-radius: 0em 0 0 0.3em;
        }
        &:nth-child(n + 0):nth-child(-n + 3) {
            background-color: rgba(170, 170, 170, 0.3);
            :active {
                background-color: rgba(240, 240, 240, 0.3);
            }
        }
        &:nth-child(4n) {
            background-color: #ff9f08;
            font-size: 1.6rem;
            :active {
                opacity: 0.7;
            }
        }
        &:nth-child(19) {
            background-color: #ff9f08;
            border-radius: 0 0 0.3em 0;
            font-size: 1.6rem;
            :active {
                opacity: 0.7;
            }
        }
    }
`;

export default Calculator;
