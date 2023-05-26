import DockTooltip from '@/components/Dock/DockTooltip';
import useOpenApp from '@/hooks/useOpenApp';
import { appID } from '@/stores/apps-store';
import styled from '@emotion/styled';
import { useState } from 'react';

interface DockItemProps {
    id: appID;
    isOpenApp: boolean;
}

const DockItem = ({ id, isOpenApp }: DockItemProps) => {
    const { handleClickApp } = useOpenApp();
    const [active, setActive] = useState(false);

    return (
        <DockItemContainer>
            {active && <DockTooltip appId={id} />}
            <DockIcon
                src={require(`@/assets/icons/${id}.png`)}
                alt={`${id} app icon`}
                onClick={() => handleClickApp(id)}
                onMouseOver={() => setActive(true)}
                onMouseOut={() => setActive(false)}
            />
            {isOpenApp && <Dot />}
        </DockItemContainer>
    );
};

const DockItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DockIcon = styled.img`
    width: 50px;
    height: 50px;
    margin: 0.3em 0.3em 0.2em 0.3em;
`;

const Dot = styled.div`
    width: 5px;
    height: 5px;
    border-radius: 3px;
    background-color: rgba(32, 32, 32, 0.8);
`;

export default DockItem;
