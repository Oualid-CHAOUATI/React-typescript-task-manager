import React, { FC, ReactElement } from 'react';
import {
  Box,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';
import { _TaskTitleField } from './_taskTitleField';
import { _TaskDescriptionField } from './_taskDescriptionFiled';
import { _TaskDateField } from './_taskDateField';
import { _TaskSelectField } from './_taskSelectField';
import { Priority } from './Enums/Priority.enum';
import { Status } from './Enums/status.enum';

export const CreateTaskForm: FC = (): ReactElement => {
  const onChange = (e: SelectChangeEvent) =>
    console.log(e.target.value);
  return (
    <>
      <Box>
        <Typography variant="h4" textAlign="center" mt={5}>
          Create a task
        </Typography>
        <Stack spacing={2}>
          <_TaskTitleField />

          <_TaskDescriptionField />
          <_TaskDateField />

          <Stack direction={'row'} spacing={2}>
            <_TaskSelectField
              options={[
                Status.todo,
                Status.inProgress,
                Status.completed,
              ]}
              label="status"
              {...{ onChange }}
              name="s"
            />
            <_TaskSelectField
              options={[
                Priority.low,
                Priority.normal,
                Priority.high,
              ]}
              label="priority"
              {...{ onChange }}
              name="s"
            />
          </Stack>
        </Stack>
        {/* task title input */}
        {/* task description input */}
        {/* task date input */}
        {/* task status input */}
        {/* task priority selector */}
      </Box>
    </>
  );
};
