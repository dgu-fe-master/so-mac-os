import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { MenuItemConfig } from '@/data/menu/finder';
import RightArrowIcon from '@/assets/icons/arrow-right.svg';
import ColorTags from '@/components/Desktop/ContextMenu/ColorTags';

export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    menu: MenuItemConfig;
}

const MenuItem = ({ menu, ...rest }: MenuItemProps) => {
    const { title, subMenu, disabled, icon, hotkey, breakAfter } = menu;

    return (
        <MenuItemWrapper>
            {title === '태그...' && <ColorTags disabled={disabled} />}
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
        </MenuItemWrapper>
    );
};

const MacKeys = ['shift', 'cmd', 'ctrl', 'esc', 'delete', 'right-tab', 'opt'];

export default MenuItem;

const MenuItemWrapper = styled.li`
    font-size: 14px;
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
