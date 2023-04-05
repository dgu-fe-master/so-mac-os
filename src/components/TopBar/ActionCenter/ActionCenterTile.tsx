import { HTMLAttributes, ReactElement } from 'react';
import styled from '@emotion/styled';
import ActionCenterToggleIcon from '@/components/TopBar/ActionCenter/ActionCenterToggleIcon';
import ActionCenterSlider from '@/components/TopBar/ActionCenter/ActionCenterSlider';
import { ReactComponent as StageManagerIcon } from '@/assets/icons/action-center/stage-manager.svg';
import { ReactComponent as ScreenMirroringIcon } from '@/assets/icons/action-center/screen-mirroring.svg';

export interface ActionCenterTileProps extends HTMLAttributes<Omit<HTMLElement, 'title'>> {
    title: string;
    subTitle?: string;
    type?: 'default' | 'bar' | 'topdown';
}

const ActionCenterTile = ({ title, subTitle, type = 'default', ...rest }: ActionCenterTileProps) => {
    switch (type) {
        case 'bar':
            return (
                <BarTileContainer>
                    <ActionToggleTitle>{title}</ActionToggleTitle>
                    <ActionCenterSlider type={title} />
                </BarTileContainer>
            );
        case 'topdown': {
            const IconByName: Record<string, ReactElement> = {
                '화면 미러링': <ScreenMirroringIcon width="20" height="20" />,
                '스테이지 매니저': <StageManagerIcon width="20" height="20" />,
            };
            return (
                <TopDownTileContainer>
                    {IconByName[title]}
                    <TopDownLabel>{title}</TopDownLabel>
                </TopDownTileContainer>
            );
        }
        case 'default':
        default:
            return (
                <TileContainer {...rest}>
                    <>
                        <ActionCenterToggleIcon name={title} />
                        <ActionToggleLabel>
                            <ActionToggleTitle>{title}</ActionToggleTitle>
                            {subTitle ? <span>{subTitle}</span> : null}
                        </ActionToggleLabel>
                    </>
                </TileContainer>
            );
    }
};

export default ActionCenterTile;

const TileContainer = styled.section`
    display: flex;
    gap: 10px;
`;

const ActionToggleTitle = styled.span`
    font-size: 13px;
    font-weight: 600;
`;

const ActionToggleLabel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    justify-content: center;
    font-size: 10px;
`;

const BarTileContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const TopDownTileContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
`;

const TopDownLabel = styled.span`
    font-size: 11px;
    word-break: keep-all;
    text-align: center;
`;
