import styled from '@emotion/styled';
import { appID } from '@/stores/apps-store';
import { apps } from '@/data/apps/apps';

interface DockTootipProps {
    appId: appID;
}

const DockTooltip = ({ appId }: DockTootipProps) => {
    const { label } = apps[appId];

    return (
        <TooltipContainer>
            <Label>{label}</Label>
            <Triangle />
        </TooltipContainer>
    );
};

const TooltipContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    height: 20px;
    position: fixed;
    bottom: 105px;
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Label = styled.div`
    font-size: 0.9rem;
    background-color: rgba(256, 256, 256, 0.4);
    padding: 8px 12px;
    border-radius: 5px;
`;

const Triangle = styled.div`
    width: 0;
    height: 0;
    border-top: 8px solid rgba(256, 256, 256, 0.4);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
`;

export default DockTooltip;
