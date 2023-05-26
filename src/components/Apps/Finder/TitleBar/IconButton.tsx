import { ButtonHTMLAttributes, ReactElement } from 'react';
import styled from '@emotion/styled';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactElement;
}

const IconButton = ({ icon, ...rest }: IconButtonProps) => {
    return <TitleBarIconButton {...rest}>{icon}</TitleBarIconButton>;
};
export default IconButton;

const TitleBarIconButton = styled.button`
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;

    :disabled {
        cursor: default;

        svg {
            [fill] {
                &:not([fill='none']) {
                    fill: #bdbec0;
                }
            }
            [stroke] {
                &:not([stroke='none']) {
                    stroke: #bdbec0;
                }
            }
        }
    }

    :hover:not(:disabled) {
        background-color: #e6e7ea;
    }

    :active:not(:disabled) {
        background-color: #d6d6d7;
    }
`;
