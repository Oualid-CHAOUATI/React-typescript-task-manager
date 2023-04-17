import React, { FC, ReactElement } from 'react';
import { Profile } from '../profile/profile';
import { CreateTaskForm } from '../createTaskForm/createTaskForm';

export const Sidebar: FC = (): ReactElement => {
  return (
    <>
      {/* <Profile name="waild ww" /> */}
      <Profile name="wild sh" />
      <CreateTaskForm />
    </>
  );
};
