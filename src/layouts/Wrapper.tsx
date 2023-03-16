import Box from '@mui/material/Box';

import { Outlet } from 'react-router-dom';

const Wrapper = () => (
    <Box
        sx={{
            padding: (theme) => theme.spacing(4, 0)
        }}
    >
        <Outlet />
    </Box>
);

export default Wrapper;
