import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { MenuItemConfig } from '@/data/menu/finder';
import MenuItem from '@/components/Desktop/ContextMenu/MenuItem';

export interface MenuDropDownProps extends HTMLAttributes<HTMLUListElement> {
    menus: Record<string, MenuItemConfig>;
    closeDropdown: () => void;
}

const MenuDropDown = ({ menus, closeDropdown, ...rest }: MenuDropDownProps) => {
    return (
        <Dropdown {...rest}>
            {Object.keys(menus).map((itemId: string) => (
                <MenuItem key={itemId} menu={menus[itemId]} itemID={itemId} closeDropdown={closeDropdown} />
            ))}
        </Dropdown>
    );
};

export default MenuDropDown;

const Dropdown = styled.ul`
    position: absolute;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 5px 0px;
    display: flex;
    flex-direction: column;
    width: max-content;
    box-shadow: 0px 2px 5px 1px rgba(141, 140, 140, 0.4);
    backdrop-filter: blur(30px);
    z-index: 10000;
`;
