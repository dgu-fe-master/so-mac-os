import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import ActionCenterTile from '@/components/TopBar/ActionCenter/ActionCenterTile';
import ActionCenterSurface from '@/components/TopBar/ActionCenter/ActionCenterSurface';

export type ActionCenterDropDownProps = HTMLAttributes<HTMLDivElement>;

const ActionCenterDropDown = ({ ...rest }: ActionCenterDropDownProps) => {
    return (
        <ACDropDown {...rest}>
            {/* Main Controls */}
            <ActionCenterSurface grid={[1, 3, 1, 3]}>
                <ActionCenterTile title="Wi-Fi" subTitle="DGU_CSE" />
                <ActionCenterTile title="Bluetooth" subTitle="켬" />
                <ActionCenterTile title="AirDrop" subTitle="모두" />
            </ActionCenterSurface>

            {/* Focus mode */}
            <ActionCenterSurface grid={[3, 5, 1, 2]}>
                <ActionCenterTile title="집중 모드" />
            </ActionCenterSurface>

            {/* Stage Manager */}
            <ActionCenterSurface grid={[3, 4, 2, 3]}>
                <ActionCenterTile title="스테이지 매니저" type="topdown" />
            </ActionCenterSurface>

            {/* Screen Mirroring */}
            <ActionCenterSurface grid={[4, 5, 2, 3]}>
                <ActionCenterTile title="화면 미러링" type="topdown" />
            </ActionCenterSurface>

            {/* Display */}
            <ActionCenterSurface grid={[1, 5, 3, 4]}>
                <ActionCenterTile title="디스플레이" type="bar" />
            </ActionCenterSurface>

            {/* Sound */}
            <ActionCenterSurface grid={[1, 5, 4, 5]}>
                <ActionCenterTile title="사운드" type="bar" />
            </ActionCenterSurface>
        </ACDropDown>
    );
};
export default ActionCenterDropDown;

const ACDropDown = styled.div`
    position: absolute;
    right: 0;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 10px;
    box-shadow: 0px 2px 5px 1px rgba(141, 140, 140, 0.4);
    display: grid;
    grid-template-columns: repeat(4, 70px);
    grid-template-rows: repeat(4, 70px);
    gap: 10px;
`;
