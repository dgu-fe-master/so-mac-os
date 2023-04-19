import { RefObject, useRef } from 'react';
import styled from '@emotion/styled';
import useContextMenu from '@/hooks/useContextMenu';
import MenuItem from '@/components/Desktop/ContextMenu/MenuItem';
import { MenuItemConfig } from '@/data/menu/finder';
import { activeContextMenuStore } from '@/stores/context-menu-store';
import { useRecoilValue } from 'recoil';

export interface ContextMenuProps {
    outerRef: RefObject<HTMLElement>;
    menus: Record<string, MenuItemConfig>;
    name: string;
    defaultVisible?: boolean;
}

const ContextMenu = ({ outerRef, menus, name, defaultVisible }: ContextMenuProps) => {
    const menuRef = useRef<HTMLUListElement>(null);
    const isActiveContext = useRecoilValue(activeContextMenuStore);
    const { coords, isVisible, setIsVisible } = useContextMenu(outerRef, name, defaultVisible);
    const { xPos: x, yPos: y } = coords;

    return isVisible && isActiveContext === name ? (
        <ContextMenuList style={{ top: y, left: x }} ref={menuRef}>
            {Object.keys(menus).map((itemId: string) => (
                <MenuItem key={itemId} menu={menus[itemId]} menuType={'context'} outerRef={outerRef} name={name} />
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
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    width: max-content;
    box-shadow: 0px 2px 5px 1px rgba(141, 140, 140, 0.4);
    z-index: 10000;
    backdrop-filter: blur(15px);
    direction: ltr;
`;
