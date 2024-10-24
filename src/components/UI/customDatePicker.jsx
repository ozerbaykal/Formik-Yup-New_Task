import {Datepicker} from '@ui-kitten/components';
import {View, Text} from 'react-native';

const CustomDatePicker = props => {
  const {onSelectDate} = props;
  return (
    <Datepicker {...props} onSelect={nextDate => onSelectDate(nextDate)} />
  );
};

export default CustomDatePicker;
