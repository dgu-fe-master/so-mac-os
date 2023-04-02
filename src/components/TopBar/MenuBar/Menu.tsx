import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';

export interface MenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}

const Menu = ({ children, active = false, ...rest }: MenuProps) => {
    return (
        <MenuWrapper active={active} {...rest}>
            {children}
        </MenuWrapper>
    );
};
export default Menu;

type MenuWrapperProps = Pick<MenuProps, 'active'>;

const MenuWrapper = styled.button<MenuWrapperProps>`
    display: flex;
    align-items: center;
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
    padding: 4px 10px;
    vertical-align: middle;
    color: white;
    border-radius: 5px;
    height: 100%;

    :hover,
    :focus {
        background: ${({ active }) => (active ? 'rgba(255, 255, 255, 0.2)' : undefined)};
    }
`;
