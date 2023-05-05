import styled from '@emotion/styled';
import SidebarItem from '@/components/Apps/Finder/Sidebar/SidebarItem';
import { FinderProps } from '@/components/Apps/Finder/Finder';
import { finderSidebarContents } from '@/data/menu/finder-sidebar';

export interface SidebarProps {
    location: FinderProps['location'];
    onChangeLocation: (loc: string) => void;
}

const Sidebar = ({ location, onChangeLocation }: SidebarProps) => {
    return (
        <SidebarContainer>
            {Object.entries(finderSidebarContents).map(([key, value]) => (
                <SidebarList key={key}>
                    <SidebarGroupTitle>{value.title}</SidebarGroupTitle>
                    {Object.entries(value.items).map(([key, value]) => (
                        <SidebarItem
                            key={key}
                            item={value}
                            onClick={() => onChangeLocation(key)}
                            isSelected={key === location}
                        />
                    ))}
                </SidebarList>
            ))}
        </SidebarContainer>
    );
};

export default Sidebar;

const SidebarContainer = styled.div`
    background-color: rgba(219, 219, 222, 0.7);
    width: 160px;
    border-radius: 0.5rem 0 0 0.5rem;
    padding: 60px 10px 0 10px;
    border-right: 1px solid #d4d4d4;
`;

const SidebarList = styled.ul`
    :not(:last-child) {
        margin-bottom: 30px;
    }
`;

const SidebarGroupTitle = styled.p`
    color: #aaabac;
    font-size: 0.8em;
    font-weight: 700;
    margin-bottom: 10px;
`;
