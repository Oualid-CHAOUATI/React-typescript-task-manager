import React, { ReactElement, FC } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  ISelectField,
  ISelectPropTypes,
} from './interfaces/ISelectField';

export const _TaskSelectField: FC<ISelectField> = ({
  value = '',
  options,
  onChange,
  label = 'hh',
  optionsValues,
  name,
  disabled = false,
}): ReactElement => {
  return (
    <>
      <FormControl fullWidth size="small">
        <InputLabel id={`${name}-input-label`}>
          {label}
        </InputLabel>
        <Select
          labelId={`${name}-select-labelId`}
          id={`${name}-select`}
          value={value + ''}
          label={label}
          onChange={onChange}
          name={name}
          disabled={disabled}
        >
          {options?.map((option, i) => (
            <MenuItem
              key={option}
              value={
                optionsValues ? optionsValues[i] : option
              }
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
// _TaskSelectField.propTypes = ISelectPropTypes;
