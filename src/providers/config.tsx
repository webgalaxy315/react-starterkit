import useLocalStorage from 'hooks/useLocalStorage';

import { ConfigContext, initialState } from 'contexts/config';

type ConfigProviderProps = {
    children: React.ReactNode;
};

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
    const origin = window?.location.origin ?? 'dapploy-frontend';
    const [config] = useLocalStorage(origin, {
        ...initialState
    });

    return <ConfigContext.Provider value={{ ...config }}>{children}</ConfigContext.Provider>;
};

export default ConfigProvider;
