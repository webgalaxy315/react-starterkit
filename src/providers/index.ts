import { createRoot } from 'react-dom/client';

import MuiThemeProvider from './theme';
import ConfigProvider from './config';
import APIProvider from './api';

const Root = createRoot(document.getElementById('app-root') as HTMLElement);

export {
    Root,
    MuiThemeProvider,
    ConfigProvider,
    APIProvider
};
