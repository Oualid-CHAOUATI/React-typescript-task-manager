import { Box, Chip, Typography } from '@mui/material';
import React, { ReactElement, FC } from 'react';
import { ITaskHeader } from './interfaces/ITaskHeader';
import dayjs from 'dayjs';

export const _TaskHeader: FC<ITaskHeader> = ({
  title = 'empty title',
  date = dayjs(),
}): ReactElement => {
  const formattedDate = date
    .locale('fr')
    .format('MMMM D, YYYY');
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        mb=".4em"
      >
        <Typography variant="h6">{title}</Typography>

        <Chip variant="outlined" label={formattedDate} />
      </Box>
    </>
  );
};
