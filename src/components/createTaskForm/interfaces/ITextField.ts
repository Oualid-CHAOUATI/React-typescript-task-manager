import { IDisabled } from './IDisabled';
import PropTypes from 'prop-types';

export interface ITextField extends IDisabled {
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => void;
}

export const ITextFieldPropTypes = {
  onchange: PropTypes.func,
  disabled: PropTypes.bool,
};
