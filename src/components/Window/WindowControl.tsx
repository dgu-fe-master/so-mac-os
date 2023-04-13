import styled from '@emotion/styled';
import { appID, openAppsState } from '@/stores/apps-store';
import { useSetRecoilState } from 'recoil';
import maxHoverImg from '@/assets/icons/max-hover.png';
import maxNormalImg from '@/assets/icons/max-normal.png';
import maxPressImg from '@/assets/icons/max-press.png';
import minHoverImg from '@/assets/icons/min-hover.png';
import minNormalImg from '@/assets/icons/min-normal.png';
import minPressImg from '@/assets/icons/min-press.png';
import closeHoverImg from '@/assets/icons/close-hover.png';
import closeNormalImg from '@/assets/icons/close-normal.png';
import closePressImg from '@/assets/icons/close-press.png';

interface WindowControlProps {
    appId: appID;
}

const WindowControl = ({ appId }: WindowControlProps) => {
    const setOpenApps = useSetRecoilState(openAppsState);

    const handleCloseApp = () => {
        setOpenApps((apps) => {
            const copyApps = { ...apps };
            copyApps[appId] = false;
            return copyApps;
        });
    };

    return (
        <WindowControlBar>
            <RedLight onClick={handleCloseApp} />
            <YellowLight />
            <GreenLight />
        </WindowControlBar>
    );
};

const WindowControlBar = styled.header`
    padding: 1em 1em 0 1em;
    height: 20px;
    width: fit-content;
    display: flex;
    gap: 7px;
`;

const RedLight = styled.div`
    width: 14px;
    height: 14px;
    background-size: cover;
    background-image: url(${closeNormalImg});
    :hover {
        background-image: url(${closeHoverImg});
    }
    :active {
        background-image: url(${closePressImg});
    }
`;

const YellowLight = styled.div`
    width: 14px;
    height: 14px;
    background-size: cover;
    background-image: url(${minNormalImg});
    :hover {
        background-image: url(${minHoverImg});
    }
    :active {
        background-image: url(${minPressImg});
    }
`;

const GreenLight = styled.div`
    width: 14px;
    height: 14px;
    background-size: cover;
    background-image: url(${maxNormalImg});
    :hover {
        background-image: url(${maxHoverImg});
    }
    :active {
        background-image: url(${maxPressImg});
    }
`;

export default WindowControl;
