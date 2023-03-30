import React, { ReactElement, FC, useState } from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  IDateField,
  IDateFieldProptypes,
} from './interfaces/IDateFiled';
export const _TaskDateField: FC<IDateField> = (
  props,
): ReactElement => {
  const {
    onChange = (value) => console.log(value),
    disabled,
    value = null,
  } = props;

  //   const [date, setDate] = useState<Date | null>(null);

  return (
    <>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        className="haha"
        // sx={{ widh: '100vw' }}
      >
        <DemoContainer
          components={['DatePicker']}
          //   sx={{ widh: '100%' }}
        >
          <DatePicker
            className="haha"
            // sx={{ widh: '100vw' }}
            label="Due date"
            {...{ onChange, disabled, value }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

_TaskDateField.propTypes = IDateFieldProptypes;
