import { RefObject, useRef } from 'react';
import styled from '@emotion/styled';
import useContextMenu from '@/hooks/useContextMenu';
import { contextMenu } from '@/data/menu/context';
import MenuItem from '../TopBar/MenuBar/MenuItem';

export interface ContextMenuProps {
    outerRef: RefObject<HTMLElement>;
}

const ContextMenu = ({ outerRef }: ContextMenuProps) => {
    const menuRef = useRef<HTMLUListElement>(null);
    const menus = contextMenu.default;
    const { coords, isVisible, setIsVisible } = useContextMenu(outerRef);
    const { xPos: x, yPos: y } = coords;

    return isVisible ? (
        <ContextMenuList style={{ top: y, left: x }} ref={menuRef}>
            {Object.keys(menus).map((itemId: string) => (
                <MenuItem key={itemId} menu={menus[itemId]} style={{ minWidth: '200px' }}>
                    {menus[itemId].title}
                </MenuItem>
            ))}
        </ContextMenuList>
    ) : (
        <></>
    );
};

export default ContextMenu;

const ContextMenuList = styled.ul`
    position: absolute;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 5px;
    display: flex;
    flex-direction: column;
    width: max-content;
    box-shadow: 0px 2px 5px 1px rgba(141, 140, 140, 0.4);
    z-index: 10000;
    backdrop-filter: blur(15px);
`;
