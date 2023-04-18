import styled from '@emotion/styled';
import { MouseEvent, useEffect, useState } from 'react';
import { TbPlusMinus } from 'react-icons/tb';

type BinaryOperation = '÷' | '+' | '-' | '×';
type UnaryOperation = '%' | '+/-';
const MAX_NUMBER_LENGTH = 25;
const DEFAULT_FONT_SIZE = '3rem';

const Calculator = () => {
    const [prevNumber, setPrevNumber] = useState<string>('');
    const [nextNumber, setNextNumber] = useState<string>('');
    const [operation, setOperation] = useState<undefined | BinaryOperation>(undefined);
    const [result, setResult] = useState<string>('0');
    const [fontSize, setFontSize] = useState<string>(DEFAULT_FONT_SIZE);

    useEffect(() => {
        const result = operation && nextNumber ? String(nextNumber) : String(prevNumber);
        if (result === '') {
            return initResult();
        }
        adjustResultFontSize(result);
        setResult(result);
    }, [prevNumber, nextNumber, operation]);

    const initResult = () => {
        setResult('0');
        setFontSize(DEFAULT_FONT_SIZE);
    };

    const adjustResultFontSize = (result: string) => {
        if (result.length > 8) {
            const size = 0.1 * result.length;
            setFontSize(`${3 - size}rem`);
        } else {
            setFontSize(DEFAULT_FONT_SIZE);
        }
    };

    const handleBinaryperationClick = (operation: BinaryOperation) => {
        setOperation(operation);
    };

    const handleUnaryOperationClick = (operation: UnaryOperation) => {
        if (operation === '+/-') {
            setPrevNumber((num) => String(-num));
        }
        if (operation === '%') {
            setPrevNumber((num) => String(parseFloat(num) / 100));
        }
    };

    const handleNumberClick = (e: MouseEvent) => {
        if (nextNumber.length >= MAX_NUMBER_LENGTH || prevNumber.length >= MAX_NUMBER_LENGTH) return;

        const target = e.target as HTMLButtonElement;
        if (operation) {
            setNextNumber((num) => num + target.value);
        } else {
            setPrevNumber((num) => num + target.value);
        }
    };

    const handleReset = () => {
        setPrevNumber('');
        setNextNumber('');
        setOperation(undefined);
    };

    const handleEqualClick = () => {
        switch (operation) {
            case '÷':
                setPrevNumber(new Function('return ' + prevNumber + '/' + nextNumber)());
                break;
            case '+':
                setPrevNumber(new Function('return ' + prevNumber + '+' + nextNumber)());
                break;
            case '-':
                setPrevNumber(new Function('return ' + prevNumber + '-' + nextNumber)());
                break;
            case '×':
                setPrevNumber(new Function('return ' + prevNumber + '*' + nextNumber)());
                break;
        }
        setNextNumber('');
    };

    const handleDecimalPointClick = () => {
        if (operation) {
            if (nextNumber.includes('.')) return;
            setNextNumber((num) => num + '.');
        } else {
            if (prevNumber.includes('.')) return;
            setPrevNumber((num) => num + '.');
        }
    };

    return (
        <CalculatorContainer>
            <ResultContainer>
                <Result fontSize={fontSize}>{result}</Result>
            </ResultContainer>
            <ButtonContainer>
                <button onClick={handleReset}>{'AC'}</button>
                <button onClick={() => handleUnaryOperationClick('+/-')}>
                    <TbPlusMinus />
                </button>
                <button onClick={() => handleUnaryOperationClick('%')}>{'%'}</button>
                <button onClick={() => handleBinaryperationClick('÷')}>{'÷'}</button>
                <button value={7} onClick={handleNumberClick}>
                    {'7'}
                </button>
                <button value={8} onClick={handleNumberClick}>
                    {'8'}
                </button>
                <button value={9} onClick={handleNumberClick}>
                    {'9'}
                </button>
                <button onClick={() => handleBinaryperationClick('×')}>{'×'}</button>
                <button value={4} onClick={handleNumberClick}>
                    {'4'}
                </button>
                <button value={5} onClick={handleNumberClick}>
                    {'5'}
                </button>
                <button value={6} onClick={handleNumberClick}>
                    {'6'}
                </button>
                <button onClick={() => handleBinaryperationClick('-')}>{'-'}</button>
                <button value={1} onClick={handleNumberClick}>
                    {'1'}
                </button>
                <button value={2} onClick={handleNumberClick}>
                    {'2'}
                </button>
                <button value={3} onClick={handleNumberClick}>
                    {'3'}
                </button>
                <button onClick={() => handleBinaryperationClick('+')}>{'+'}</button>
                <button value={0} onClick={handleNumberClick}>
                    {'0'}
                </button>
                <button onClick={handleDecimalPointClick}>{'.'}</button>
                <button onClick={handleEqualClick}>{'='}</button>
            </ButtonContainer>
        </CalculatorContainer>
    );
};

const CalculatorContainer = styled.div``;

const ResultContainer = styled.div`
    height: 60px;
    padding: 0 1em;
    display: flex;
    justify-content: end;
    align-items: end;
`;

type ResultProps = {
    fontSize: string;
};

const Result = styled.p<ResultProps>`
    font-size: ${({ fontSize }) => fontSize};
    font-weight: 200;
    color: white;
    padding-bottom: 10px;
`;

const ButtonContainer = styled.div`
    height: 234px;
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
            background-color: rgba(160, 160, 160, 0.2);
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
