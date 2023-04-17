import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { MenuItemConfig } from '@/data/menu/finder';
import MenuItem from '@/components/Desktop/ContextMenu/MenuItem';

export interface MenuDropDownProps extends HTMLAttributes<HTMLUListElement> {
    menu: Record<string, MenuItemConfig>;
}

const MenuDropDown = ({ menu, ...rest }: MenuDropDownProps) => {
    return (
        <Dropdown {...rest}>
            {Object.keys(menu).map((itemId: string) => (
                <MenuItem key={itemId} menu={menu[itemId]} />
            ))}
        </Dropdown>
    );
};

export default MenuDropDown;

const Dropdown = styled.ul`
    position: absolute;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 5px;
    display: flex;
    flex-direction: column;
    width: max-content;
    box-shadow: 0px 2px 5px 1px rgba(141, 140, 140, 0.4);
    backdrop-filter: blur(15px);
    z-index: 10000;
`;
