import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  Typography,
} from '@mui/material';
import React, { ReactElement, FC } from 'react';
import { ITaskFooter } from './interfaces/ITaskFooter';

export const _TaskFooter: FC<ITaskFooter> = ({
  onClick = (e) => {
    console.log(e);
  },
  onStatusChange = (e) => {
    console.log(e);
  },
}): ReactElement => {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <FormControlLabel
          label="in progress"
          control={
            <Switch
              color="success"
              onChange={onStatusChange}
            />
          }
        ></FormControlLabel>

        <Button
          variant="contained"
          color="success"
          sx={{ borderRadius: '.5em' }}
          onClick={onClick}
        >
          <Typography color="white">
            Mark complete
          </Typography>
        </Button>
      </Box>
    </>
  );
};
