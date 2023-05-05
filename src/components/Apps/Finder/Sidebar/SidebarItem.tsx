import styled from '@emotion/styled';
import { FinderItemConfig } from '@/components/Apps/Finder/Sidebar/Sidebar';
import { ButtonHTMLAttributes } from 'react';

export interface SidebarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    item: FinderItemConfig;
}

const SidebarItem = ({ item, ...rest }: SidebarItemProps) => {
    return (
        <SidebarGroupItem>
            <ItemButton disabled {...rest}>
                {item.icon}
                {item.title}
            </ItemButton>
        </SidebarGroupItem>
    );
};

export default SidebarItem;

const SidebarGroupItem = styled.li`
    color: #454545;
    font-size: 0.9em;

    :not(:last-child) {
        margin-bottom: 12px;
    }
`;

const ItemButton = styled.button`
    background: inherit;
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

    :disabled {
        color: #aaabac;

        svg {
            [fill] {
                &:not([fill='none']) {
                    fill: #a4c7f0;
                }
            }
            [stroke] {
                &:not([stroke='none']) {
                    stroke: #a4c7f0;
                }
            }
        }
    }

    svg {
        width: 16px;

        [fill] {
            &:not([fill='none']) {
                fill: #0071f6;
            }
        }
        [stroke] {
            &:not([stroke='none']) {
                stroke: #0071f6;
            }
        }
    }
`;
