import { appID } from '@/stores/apps-store';
import { lazy } from 'react';

const Calculator = lazy(() => import('./Calculator/Calculator'));
const Finder = lazy(() => import('./Finder/Finder'));

interface AppNexusProps {
    appId: appID;
}

export const AppNexus = ({ appId }: AppNexusProps) => {
    if (appId === 'calculator') return <Calculator />;
    if (appId === 'finder') return <Finder />;
    return <></>;
};
