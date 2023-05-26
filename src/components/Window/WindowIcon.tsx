import { ButtonHTMLAttributes, useRef } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { activeIconStore, DesktopIcon } from '@/stores/desktop-icon-store';
import ContextMenu from '@/components/Desktop/ContextMenu/ContextMenu';
import { contextMenu } from '@/data/menu/context';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import useFocusWindow from '@/hooks/useFocusWindow';
import FolderIcon from '@/assets/icons/default-folder.png';
import GithubIcon from '@/assets/icons/github.png';
import useOpenApp from '@/hooks/useOpenApp';

export interface WindowIconProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    icon: DesktopIcon;
}

const GITHUB_URL = 'https://github.com/dgu-fe-master/so-mac-os';

const WindowIcon = ({ icon, ...rest }: WindowIconProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { name, type } = icon;

    const [activatedIcon, setActivatedIcon] = useRecoilState(activeIconStore);
    const { handleFocusWindow } = useFocusWindow();
    const { handleClickApp } = useOpenApp();

    useOnClickOutside(ref, () => setActivatedIcon(null));

    const IconImgByType: Record<DesktopIcon['type'], string> = {
        finder: FolderIcon,
        browser: GithubIcon,
    };

    const onFocus = () => setActivatedIcon(icon);

    const onDoubleClick = (id: DesktopIcon['type']) => {
        switch (id) {
            case 'browser':
                window.open(GITHUB_URL);
                break;
            case 'finder':
            default:
                // TODO: DockItem과 로직이 같아서 앱을 여는 부분과 관련 로직 커스텀 훅으로 분리하기
                handleClickApp(id);
                break;
        }
    };

    return (
        <div ref={ref}>
            <ContextMenu name={name} outerRef={ref} menus={contextMenu.folder} />
            <IconButton
                className="window-icon"
                active={activatedIcon?.name === name}
                onClick={onFocus}
                onContextMenu={onFocus}
                onDoubleClick={() => onDoubleClick(type)}
                {...rest}
            >
                <img src={IconImgByType[type]} width="70" height="70" />
                <span>{name}</span>
            </IconButton>
        </div>
    );
};

export default WindowIcon;

interface IconButtonProps {
    active: boolean;
}

const IconButton = styled.button<IconButtonProps>`
    display: flex;
    align-items: center;
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    img {
        border-radius: 3px;
        background-color: ${({ active }) => (active ? 'rgba(128,128,128, 0.8)' : null)};
        box-shadow: ${({ active }) => (active ? '0px 0px 3px 1.5px #a9a9a9' : null)};
    }

    span {
        text-align: center;
        color: white;
        padding: 1px 3px;
        border-radius: 3px;
        line-height: 17px;
        max-width: 110px;
        word-break: keep-all;

        /* Blue color */
        background-color: ${({ active }) => (active ? '#1574f1' : null)};

        /* Grey color */
        /* background-color: ${({ active }) => (active ? 'rgb(198,198,198)' : null)};
        color: ${({ active }) => (active ? 'rgb(74,74,74)' : null)}; */
    }
`;
