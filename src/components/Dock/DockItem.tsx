import { appID, openAppsState } from '@/stores/apps-store';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';

interface DockItemProps {
    id: appID;
}

const DockItem = ({ id }: DockItemProps) => {
    const setOpenApps = useSetRecoilState(openAppsState);

    const handleOpenApp = () => {
        setOpenApps((apps) => {
            const copyApps = { ...apps };
            copyApps[id] = true;
            return copyApps;
        });
    };

    return <DockIcon src={require(`@/assets/icons/${id}.png`)} alt={`${id} app icon`} onClick={handleOpenApp} />;
};

const DockIcon = styled.img`
    width: 50px;
    height: 50px;
    margin: 0.3em;
`;

export default DockItem;
