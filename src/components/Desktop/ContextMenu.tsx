import React, { RefObject } from 'react';
import styled from '@emotion/styled';
import useContextMenu from '@/hooks/useContextMenu';

export interface ContextMenuProps {
    outerRef: RefObject<HTMLElement>;
}

const ContextMenu = ({ outerRef }: ContextMenuProps) => {
    const { coords, isVisible, setIsVisible } = useContextMenu(outerRef);

    return isVisible ? <ContextMenuList>ContextMenu</ContextMenuList> : <></>;
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
`;
