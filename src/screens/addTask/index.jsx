import {Input, Button, Radio, RadioGroup} from '@ui-kitten/components';
import {Formik} from 'formik';
import {StyleSheet, View, Alert} from 'react-native';
import CustomDatePicker from '../../components/UI/customDatePicker';
import {Category} from 'iconsax-react-native';

const AddTask = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          title: '',
          description: '',
          startDate: null,
          endDate: null,
          category: null,
        }}
        onSubmit={values => Alert.alert(JSON.stringify(values, null, 2))}>
        {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
          <View>
            <Input
              size="large"
              style={{marginVertical: 10}}
              value={values.title}
              label={'Title'}
              placeholder=""
              onChangeText={handleChange('title')}
            />
            <Input
              multiline
              size="large"
              style={{marginVertical: 10}}
              value={values.description}
              label={'description'}
              placeholder=""
              onChangeText={handleChange('description')}
            />
            <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              label="Start Date"
              date={values.startDate}
              onSelectDate={date => setFieldValue('startDate', date)}
            />
            <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              label="End Date"
              date={values.endDate}
              onSelectDate={date => setFieldValue('endDate', date)}
            />
            <RadioGroup
              selectedIndex={values.category}
              onChange={index => setFieldValue('category', index)}>
              <Radio status="success"> Software</Radio>
              <Radio status="success">Design</Radio>

              <Radio status="success">Oparation</Radio>
            </RadioGroup>

            <Button
              status="success"
              style={{marginVertical: 10}}
              onPress={handleSubmit}>
              Create
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
