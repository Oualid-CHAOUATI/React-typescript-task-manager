import React, { ReactElement, FC } from 'react';

import { TextField } from '@mui/material';
import {
  ITextField,
  ITextFieldPropTypes,
} from './interfaces/ITextField';
export const _TaskTitleField: FC<ITextField> = (
  props,
): ReactElement => {
  const {
    onChange = (e) => console.log(e),
    disabled = false,
  } = props;

  return (
    <>
      <TextField
        variant="outlined"
        label="Task title"
        fullWidth
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
};

_TaskTitleField.propTypes = ITextFieldPropTypes;
