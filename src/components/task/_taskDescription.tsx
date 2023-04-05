import { Typography } from '@mui/material';
import React, { ReactElement, FC } from 'react';
import { ITaskDescription } from './interfaces/ITaskDescription';

export const _TaskDescription: FC<ITaskDescription> = ({
  description = 'empty decription ...',
}): ReactElement => {
  return (
    <>
      <Typography py={'.7em'}>{description}</Typography>
    </>
  );
};
