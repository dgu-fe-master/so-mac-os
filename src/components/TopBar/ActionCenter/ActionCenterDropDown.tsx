import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import ActionCenterTile from './ActionCenterTile';
import ActionCenterSurface from './ActionCenterSurface';

export type ActionCenterDropDownProps = HTMLAttributes<HTMLDivElement>;

const ActionCenterDropDown = ({ ...rest }: ActionCenterDropDownProps) => {
    return (
        <ACDropDown {...rest}>
            {/* Main Controls */}
            <ActionCenterSurface grid={[1, 2, 1, 3]}>
                <ActionCenterTile title="Wi-Fi" subTitle="DGU_CSE" />
                <ActionCenterTile title="Bluetooth" subTitle="켬" />
                <ActionCenterTile title="AirDrop" subTitle="모두" />
            </ActionCenterSurface>

            {/* Focus mode */}
            <ActionCenterSurface grid={[2, 3, 1, 2]}>
                <ActionCenterTile title="집중 모드" />
            </ActionCenterSurface>

            {/* TODO: 집중 모드 외에 추가할 것 생각하기 */}
            {/* Focus mode */}
            <ActionCenterSurface grid={[2, 3, 2, 3]}>
                <ActionCenterTile title="집중 모드" />
            </ActionCenterSurface>

            {/* Display */}
            <ActionCenterSurface grid={[1, 3, 3, 4]}>
                <ActionCenterTile title="디스플레이" type="bar" />
            </ActionCenterSurface>

            {/* Sound */}
            <ActionCenterSurface grid={[1, 3, 4, 5]}>
                <ActionCenterTile title="사운드" type="bar" />
            </ActionCenterSurface>
        </ACDropDown>
    );
};
export default ActionCenterDropDown;

const ACDropDown = styled.div`
    position: absolute;
    right: 0;
    min-width: 300px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 10px;
    box-shadow: 0px 2px 5px 1px rgba(141, 140, 140, 0.4);
    display: grid;
    gap: 10px;
`;
