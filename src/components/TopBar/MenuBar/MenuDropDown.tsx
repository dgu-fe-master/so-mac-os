import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { MenuItemConfig } from '@/data/menu/finder';
import MenuItem from '@/components/TopBar/MenuBar/MenuItem';

export interface MenuDropDownProps extends HTMLAttributes<HTMLUListElement> {
    menu: Record<string, MenuItemConfig>;
}

const MenuDropDown = ({ menu, ...rest }: MenuDropDownProps) => {
    return (
        <Dropdown {...rest}>
            {Object.keys(menu).map((itemId: string) => (
                <MenuItem key={itemId} menu={menu[itemId]}>
                    {menu[itemId].title}
                </MenuItem>
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
`;
