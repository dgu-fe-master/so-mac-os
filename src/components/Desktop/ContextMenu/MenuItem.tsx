import { ButtonHTMLAttributes, useState, useRef, RefObject } from 'react';
import styled from '@emotion/styled';
import { MenuItemConfig } from '@/data/menu/finder';
import RightArrowIcon from '@/assets/icons/arrow-right.svg';
import ColorTags from '@/components/Desktop/ContextMenu/ColorTags';
import MenuDropDown from '@/components/TopBar/MenuBar/MenuDropDown';
import ContextMenu from './ContextMenu';

export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    menu: MenuItemConfig;
    menuType?: 'context' | 'topBar';
}

export interface ContextMenuItemProps extends MenuItemProps {
    outerRef: RefObject<HTMLElement>;
    name: string;
}

const MenuItem = ({ menu, menuType = 'topBar', ...props }: MenuItemProps | ContextMenuItemProps) => {
    const { title, subMenu, disabled, icon, hotkey, breakAfter, colorTags } = menu;
    const { outerRef, name, ...rest } = props as ContextMenuItemProps;
    const [hover, setHover] = useState<boolean>(false);
    const subMenuRef = useRef<HTMLLIElement>(null);

    const handleOpenSubmenu = () => {
        if (hover) return;
        setHover(true);
    };

    const handleCloseSubmenu = () => {
        if (!hover) return;
        setHover(false);
    };

    return (
        <MenuItemWrapper
            onClick={handleOpenSubmenu}
            onMouseEnter={handleOpenSubmenu}
            onMouseLeave={handleCloseSubmenu}
            ref={subMenuRef}
        >
            {colorTags && <ColorTags disabled={disabled} />}
            <MenuItemButton disabled={disabled} {...rest}>
                <span>{title}</span>
                {hotkey ? (
                    <HotkeyLabel>
                        {hotkey.map((key: string) => (
                            <div key={key}>
                                {MacKeys.includes(key) ? (
                                    <img src={require(`@/assets/icons/keys/${key}-key.png`)} width="12" />
                                ) : (
                                    key
                                )}
                            </div>
                        ))}
                    </HotkeyLabel>
                ) : subMenu ? (
                    <img src={RightArrowIcon} width="6" />
                ) : null}
            </MenuItemButton>
            {breakAfter && <DivisionLine />}
            {subMenu && Object.keys(subMenu).length !== 0 && hover && (
                <SubMenuWrapper>
                    {menuType === 'topBar' ? (
                        <MenuDropDown menus={subMenu} />
                    ) : (
                        <ContextMenu menus={subMenu} outerRef={outerRef} name={name} defaultVisible={true} />
                    )}
                </SubMenuWrapper>
            )}
        </MenuItemWrapper>
    );
};

const MacKeys = ['shift', 'cmd', 'ctrl', 'esc', 'delete', 'right-tab', 'opt'];

export default MenuItem;

const MenuItemWrapper = styled.li`
    font-size: 14px;
    padding: 0 5px;
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
    gap: 20px;

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
        height: 15px;
    }
`;

const DivisionLine = styled.hr`
    border: 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 3px 0;
    height: 1px;
`;

const HotkeyLabel = styled.div`
    height: 15px;
    display: flex;
    align-items: center;
    gap: 4px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(16, 16, 16, 0.3);
    }
`;

const SubMenuWrapper = styled.div`
    position: absolute;
    right: 0;
    margin-top: -25px;
`;
