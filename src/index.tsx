import App from './App';

import {
    Root,
    MuiThemeProvider,
    ConfigProvider,
    APIProvider,
} from './providers';

Root.render(
    <ConfigProvider>
        <MuiThemeProvider>
            <APIProvider>
                <App />
            </APIProvider>
        </MuiThemeProvider>
  </ConfigProvider >
);
