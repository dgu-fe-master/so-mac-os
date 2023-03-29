import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { MenuItemConfig } from '@/data/menu/finder';

export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    menu: MenuItemConfig;
}

const MenuItem = ({ menu, ...rest }: MenuItemProps) => {
    const { title, subMenu, disabled, icon, hotkey, breakAfter } = menu;

    return (
        <MenuItemWrapper>
            <MenuItemButton disabled={disabled} {...rest}>
                <span>{title}</span>
            </MenuItemButton>
            {breakAfter ? <DivisionLine /> : null}
        </MenuItemWrapper>
    );
};

export default MenuItem;

const MenuItemWrapper = styled.li`
    font-size: 14px;
    color: black;
`;

const MenuItemButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    overflow: visible;
    cursor: default;
    width: 100%;
    padding: 5px 10px;

    :hover:not(:disabled) {
        background-color: #1574f1;
        border-radius: 5px;
        color: white;
        cursor: pointer;
    }

    :not(:disabled) {
        color: #3a292b;
    }

    span {
        align-items: center;
        display: flex;
    }
`;

const DivisionLine = styled.hr`
    border: 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 3px 0;
    height: 1px;
`;
