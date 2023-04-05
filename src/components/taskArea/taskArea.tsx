import { Box, Grid } from '@mui/material';
import dayjs from 'dayjs';
import React, { ReactElement, FC } from 'react';
import { TaskCounter } from '../task-counter/taskCounter';
import { Status } from '../createTaskForm/Enums/status.enum';
import { Task } from '../task/task';
import { Priority } from '../createTaskForm/Enums/Priority.enum';

export const TaskArea: FC = (): ReactElement => {
  const today = dayjs();
  const formattedDate = today
    .locale('fr')
    .format('MMMM D, YYYY');
  return (
    <>
      <Grid>
        <Box>
          <h2>
            Status of your tasks as on {formattedDate}
          </h2>
        </Box>

        <Grid
          container
          display="flex"
          justifyContent="center"
          gap="1em"
        >
          {/* counters */}
          <Grid
            item
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            gap="2em"
            md={10}
            xs={12}
          >
            <TaskCounter count={2} status={Status.todo} />
            <TaskCounter
              count={2}
              status={Status.inProgress}
            />
            <TaskCounter
              count={2}
              status={Status.completed}
            />
          </Grid>
          {/* tasks */}
          <Grid
            item
            sx={{ width: '100%' }}
            gap={'1.6em'}
            display={'flex'}
            flexDirection={'column'}
          >
            <Task
              status={Status.todo}
              priority={Priority.low}
            />
            <Task
              status={Status.inProgress}
              priority={Priority.normal}
            />
            <Task
              status={Status.completed}
              priority={Priority.high}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
