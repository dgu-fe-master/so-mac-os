import React from 'react';
import styled from '@emotion/styled';

// TODO: 위치 수정
const aboutThisMacInfo = {
    title: 'MacBook Pro',
    specification: '13-inch, M1, 2020',
    chip: 'Apple M1',
    memory: '16GB',
    serialNumber: 'X1XXXX010X10X',
    macOS: 'Ventura 13.1',
};

const AboutThisMac = () => {
    const { title, specification, chip, memory, serialNumber, macOS } = aboutThisMacInfo;
    return (
        <Container>
            <img src={require('@/assets/images/macbook.png')} width="180" />
            <AboutThisMacHeader>
                <h1>{title}</h1>
                <span>{specification}</span>
            </AboutThisMacHeader>
            <AboutThisMacBody>
                <ul>
                    <li>
                        <span>칩</span>
                        <span>{chip}</span>
                    </li>
                    <li>
                        <span>메모리</span>
                        <span>{memory}</span>
                    </li>
                    <li>
                        <span>일련 번호</span>
                        <span>{serialNumber}</span>
                    </li>
                    <li>
                        <span>macOS</span>
                        <span>{macOS}</span>
                    </li>
                </ul>
            </AboutThisMacBody>
            <AboutThisMacFooter>
                <button>추가 정보...</button>
                <a>규제 인증서</a>
                <p>
                    <sup>TM</sup> 및 © 1983-2022 Apple Inc.
                </p>
                <p>모든 권리 보유.</p>
            </AboutThisMacFooter>
        </Container>
    );
};
export default AboutThisMac;

const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Container = styled(FlexBox)`
    padding: 50px 30px 20px 30px;
    text-align: center;
    font-size: 0.7em;
`;

const AboutThisMacHeader = styled(FlexBox)`
    margin-top: 40px;

    h1 {
        font-size: 2em;
        font-weight: 700;
    }

    span {
        line-height: 2em;
        color: #aaabad;
    }
`;

const AboutThisMacBody = styled(FlexBox)`
    margin-top: 20px;
    line-height: 1.5em;
    color: #4a4b4b;
    li {
        display: flex;
        gap: 10px;

        span:first-child {
            width: 70px;
            text-align: right;
        }
    }
`;

const AboutThisMacFooter = styled(FlexBox)`
    margin-top: 20px;
    line-height: 1.5em;
    color: #aaabad;

    button {
        color: #434344;
        background-color: #d0d1d3;
        border: none;
        padding: 2px 10px;
        border-radius: 5px;
        margin-bottom: 15px;
    }

    a {
        text-decoration: underline;
    }
`;
