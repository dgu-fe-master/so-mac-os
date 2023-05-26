import { appID } from '@/stores/apps-store';
import { lazy } from 'react';

const Calculator = lazy(() => import('./Calculator/Calculator'));
const Finder = lazy(() => import('./Finder/Finder'));
const Calendar = lazy(() => import('./Calendar/Calendar'));
const AboutThisMac = lazy(() => import('./AboutThisMac/AboutThisMac'));

interface AppNexusProps {
    appId: appID;
}

export const AppNexus = ({ appId }: AppNexusProps) => {
    if (appId === 'calculator') return <Calculator />;
    if (appId === 'finder') return <Finder />;
    if (appId === 'calendar') return <Calendar />;
    if (appId === 'aboutThisMac') return <AboutThisMac />;
    return <></>;
};
