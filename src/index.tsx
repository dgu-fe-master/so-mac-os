import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '@/styles/global-styles';
import DesktopPage from '@/pages/Desktop';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <RecoilRoot>
            <DesktopPage />
        </RecoilRoot>
    </React.StrictMode>
);
