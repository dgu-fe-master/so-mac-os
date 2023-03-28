import styled from '@emotion/styled';
import { appID, openAppsState } from '@/stores/apps-store';
import { useSetRecoilState } from 'recoil';

interface WindowControlProps {
    appId: appID;
}

const WindowControl = ({ appId }: WindowControlProps) => {
    const setOpenApps = useSetRecoilState(openAppsState);

    const closeApp = () => {
        setOpenApps((apps) => {
            const copyApps = { ...apps };
            copyApps[appId] = false;
            return copyApps;
        });
    };

    return (
        <WindowControlBar>
            <RedLight onClick={closeApp} />
            <YellowLight />
            <GreenLight />
        </WindowControlBar>
    );
};

const WindowControlBar = styled.header`
    height: 20px;
    width: 100%;
    display: flex;
`;

const RedLight = styled.div`
    background-color: #ff605c;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    margin-right: 7px;
`;

const YellowLight = styled.div`
    background-color: #ffbd44;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    margin-right: 7px;
`;

const GreenLight = styled.div`
    background-color: #00ca4e;
    width: 14px;
    height: 14px;
    border-radius: 7px;
`;

export default WindowControl;
