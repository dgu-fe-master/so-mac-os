import useFocusWindow from '@/hooks/useFocusWindow';
import { useSetRecoilState } from 'recoil';
import { appID, openAppsState } from '@/stores/apps-store';

function useOpenApp(id: appID) {
    const setOpenApps = useSetRecoilState(openAppsState);
    const { handleFocusWindow } = useFocusWindow();

    const handleClickApp = () => {
        setOpenApps((apps) => ({ ...apps, [id]: true }));
        handleFocusWindow(id);
    };

    return { handleClickApp };
}

export default useOpenApp;
