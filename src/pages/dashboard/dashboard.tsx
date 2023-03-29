import React, { FC, ReactElement } from 'react';

// must include React here , it occurs when xe try to sue jsx in ts|tsx files ... compiles must be able to resolve the reference to the library React.. hence we have to import it on the topof our file

import { Grid } from '@mui/material';
import { TaskArea } from '../../components/taskArea/taskArea';
import { Sidebar } from '../../components/sidebar/sidebar';

export const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" fontSize="inherit">
      <Grid item md={Math.max(8, 2)} p={3}>
        <TaskArea />
      </Grid>
      <Grid
        p={3}
        item
        md={4}
        sx={{
          backgroundColor: 'background.paper',
          fontSize: 'inherit',
        }}
      >
        <Sidebar />
      </Grid>
    </Grid>
  );
};
