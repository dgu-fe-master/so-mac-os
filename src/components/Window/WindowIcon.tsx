import { ButtonHTMLAttributes, useRef } from 'react';
import styled from '@emotion/styled';
import FolderIcon from '@/assets/icons/default-folder.png';
import { useRecoilState } from 'recoil';
import { activeIconStore, DesktopIcon } from '@/stores/desktop-icon-store';
import ContextMenu from '@/components/Desktop/ContextMenu/ContextMenu';
import { contextMenu } from '@/data/menu/context';
import useOnClickOutside from '@/hooks/useOnClickOutside';

export interface WindowIconProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    icon: DesktopIcon;
}

const WindowIcon = ({ icon, ...rest }: WindowIconProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { name, type } = icon;

    const [activatedIcon, setActivatedIcon] = useRecoilState(activeIconStore);

    useOnClickOutside(ref, () => setActivatedIcon(null));

    const IconImgByType: Record<string, string> = {
        folder: FolderIcon,
    };

    const onFocus = () => setActivatedIcon(icon);

    return (
        <div ref={ref}>
            <ContextMenu name={name} outerRef={ref} menus={contextMenu.folder} />
            <IconButton
                className="window-icon"
                active={activatedIcon?.name === name}
                onClick={onFocus}
                onContextMenu={onFocus}
                // onDoubleClick={}
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
