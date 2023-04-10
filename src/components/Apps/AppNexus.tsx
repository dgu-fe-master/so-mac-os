import { appID } from '@/stores/apps-store';
import { lazy } from 'react';

const Calculator = lazy(() => import('./Calculator/Calculator'));

interface AppNexusProps {
    appId: appID;
}

export const AppNexus = ({ appId }: AppNexusProps) => {
    if (appId === 'calculator') return <Calculator />;
    return <></>;
};
