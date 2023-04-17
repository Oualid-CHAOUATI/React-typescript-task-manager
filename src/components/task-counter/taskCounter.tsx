import { Avatar, Box, Typography } from '@mui/material';
import React, { ReactElement, FC } from 'react';
import { ItaskCounter } from './Interfaces/ITaskCounter';
import { Status } from '../createTaskForm/Enums/status.enum';
import { emitCorrectColorandLabel } from './helpers/emitCorrectColorAndLabel';

export const TaskCounter: FC<ItaskCounter> = ({
  count = 0,
  status = Status.inProgress,
}): ReactElement => {
  const size = '100px';
  const { color, label } = emitCorrectColorandLabel(status);
  console.log(color);
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap=".5em"
        alignItems="center"
      >
        <Avatar
          sizes="big"
          sx={{
            height: size,
            width: size,
            border: `10px solid`,
            borderColor: color,
            background: '#fff',
          }}
        >
          <Typography
            variant="h4"
            component="p"
            color="blue"
          >
            {count}
          </Typography>
        </Avatar>
        <Typography variant="h5" component="p">
          {label}
        </Typography>
      </Box>
    </>
  );
};
