import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import ActionCenterToggleIcon from '@/components/TopBar/ActionCenter/ActionCenterToggleIcon';
import ActionCenterSlider from './ActionCenterSlider';

export interface ActionCenterTileProps extends HTMLAttributes<Omit<HTMLElement, 'title'>> {
    grid?: [number, number];
    title: string;
    subTitle?: string;
    type?: 'default' | 'bar';
}

const ActionCenterTile = ({ title, subTitle, type = 'default', grid, ...rest }: ActionCenterTileProps) => {
    if (type === 'default')
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
    else {
        return (
            <BarTileContainer>
                <ActionToggleTitle>{title}</ActionToggleTitle>
                <ActionCenterSlider type={title} />
            </BarTileContainer>
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
