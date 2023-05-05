import { FinderItemConfig } from '@/data/menu/finder-sidebar';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

export interface SidebarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    item: FinderItemConfig;
    isSelected: boolean;
}

const SidebarItem = ({ item, isSelected, ...rest }: SidebarItemProps) => {
    const { icon, title, disabled } = item;
    return (
        <SidebarGroupItem>
            <ItemButton disabled={disabled} isSelected={isSelected} {...rest}>
                <img src={require(`@/assets/icons/${icon}.svg`)} width="16" />
                {title}
            </ItemButton>
        </SidebarGroupItem>
    );
};

export default SidebarItem;

const SidebarGroupItem = styled.li`
    color: #454545;
    font-size: 0.9em;
`;

const ItemButton = styled.button<{ isSelected: boolean }>`
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    display: flex;
    align-items: center;
    gap: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #49494a;
    padding: 5px;
    width: 100%;
    border-radius: 5px;
    height: 30px;
    background: ${({ isSelected }) => (isSelected ? '#cfd0d3' : 'inherit')};

    :disabled {
        cursor: default;
        color: #aaabac;
    }
`;
