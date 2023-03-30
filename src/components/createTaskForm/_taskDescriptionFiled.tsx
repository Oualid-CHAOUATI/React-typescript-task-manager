import React, { ReactElement, FC } from 'react';
import { TextField } from '@mui/material';
import {
  ITextField,
  ITextFieldPropTypes,
} from './interfaces/ITextField';

export const _TaskDescriptionField: FC<ITextField> = (
  props,
): ReactElement => {
  const {
    onChange = (e) => {
      console.log(e);
    },
    disabled,
  } = props;
  return (
    <>
      <TextField
        rows={4}
        multiline
        fullWidth
        label="Task description"
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
};

_TaskDescriptionField.propTypes = ITextFieldPropTypes;
