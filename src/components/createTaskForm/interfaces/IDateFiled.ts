import { IDisabled } from './IDisabled';
import PropTypes from 'prop-types';

export interface IDateField extends IDisabled {
  value?: Date | null;
  onChange?: (value: Date | null) => void;
}

const p = PropTypes;
export const IDateFieldProptypes = {
  //   value: PropTypes.date,
  disabled: p.bool,
  onChange: p.func,
  value: p.instanceOf(Date),
};
