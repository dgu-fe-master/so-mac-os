import { useRef } from 'react';
import styled from '@emotion/styled';
import { topBarMenuStore, MenuID, activeMenuStore } from '@/stores/topbar-store';
import { useRecoilState, useRecoilValue } from 'recoil';
import Menu from '@/components/TopBar/MenuBar/Menu';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import MenuDropDown from '@/components/TopBar/MenuBar/MenuDropDown';

const MenuBar = () => {
    const menuBarRef = useRef<HTMLDivElement>(null);
    const topBarMenus = useRecoilValue(topBarMenuStore);
    const [activeMenu, setActiveMenu] = useRecoilState(activeMenuStore);

    const handleMenuFocus = (menuId: MenuID) => activeMenu !== '' && setActiveMenu(menuId);

    const handleMenuFocusOut = () => setActiveMenu('');

    const handleMenuClicked = (menuId: MenuID) => {
        if (menuId === activeMenu) handleMenuFocusOut();
        else setActiveMenu(menuId);
    };

    useOnClickOutside(menuBarRef, handleMenuFocusOut);

    return (
        <div>
            <MenuBarContainer ref={menuBarRef}>
                {Object.keys(topBarMenus).map((menuId: MenuID, index: number) => (
                    <div key={menuId}>
                        <Menu
                            style={{ fontWeight: index === 1 ? 600 : 'inherit' }}
                            active={menuId === activeMenu}
                            onClick={() => handleMenuClicked(menuId)}
                            onFocus={() => handleMenuFocus(menuId)}
                            onMouseOver={() => handleMenuFocus(menuId)}
                        >
                            {menuId === 'apple' ? (
                                <AppleLogoIcon src={require(`@/assets/icons/apple-logo.png`)} alt="apple menu" />
                            ) : (
                                topBarMenus[menuId].title
                            )}
                        </Menu>
                        {activeMenu === menuId && <MenuDropDown menus={topBarMenus[menuId].menu} />}
                    </div>
                ))}
            </MenuBarContainer>
        </div>
    );
};

export default MenuBar;

const MenuBarContainer = styled.div`
    height: 100%;
    display: flex;
    position: relative;
`;

const AppleLogoIcon = styled.img`
    height: 15px;
`;
