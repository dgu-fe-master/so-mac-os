import useFocusWindow from '@/hooks/useFocusWindow';
import { useSetRecoilState } from 'recoil';
import { appID, openAppsState } from '@/stores/apps-store';

function useOpenApp() {
    const setOpenApps = useSetRecoilState(openAppsState);
    const { handleFocusWindow } = useFocusWindow();

    const handleClickApp = (id: appID) => {
        setOpenApps((apps) => ({ ...apps, [id]: true }));
        handleFocusWindow(id);
    };

    return { handleClickApp };
}

export default useOpenApp;
