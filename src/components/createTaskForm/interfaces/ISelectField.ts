import { SelectChangeEvent } from '@mui/material';
import { IDisabled } from './IDisabled';
import PropTypes from 'prop-types';
export interface ISelectField extends IDisabled {
  name: string;
  options: (number | string)[];
  optionsValues?: (number | string)[];
  value?: number | string;
  labelId?: string;
  label?: string;
  onChange?: (e: SelectChangeEvent) => void;
}

const p = PropTypes;

export const ISelectPropTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ).isRequired,
  optionsValues: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.oneOf([null]),
      PropTypes.oneOf([undefined]),
    ]),
  ),
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  labelId: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
