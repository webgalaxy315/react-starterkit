import { EnvProps, ConfigProps } from 'types/config';

const NODE_ENV = process.env.NODE_ENV;

// ** Secret config variables should be located in .env. [Todo]
const ENV: EnvProps = {
    development: {},
    production: {},
    test: {}
};

const Config: ConfigProps = {
    env: ENV[NODE_ENV]
};

export default Config;
