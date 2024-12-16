import {Input, Button, Radio, RadioGroup} from '@ui-kitten/components';
import {Formik} from 'formik';
import {StyleSheet, View} from 'react-native';
import CustomDatePicker from '../../components/UI/customDatePicker';
import taskSchema from '../../utils/validation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {status} from '../../utils/constant';
import uuid from 'react-native-uuid';

const AddTask = () => {
  const saveTask = async values => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      let myTask = savedTasks ? JSON.parse(savedTasks) : [];
      myTask.push(values);
      await AsyncStorage.setItem('tasks', JSON.stringify(myTask));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          id: uuid.v4(),
          title: 'Yazılım',
          description: 'react-native konuları',
          startDate: null,
          endDate: null,
          category: null,
          status: status.ONGOING,
        }}
        validationSchema={taskSchema}
        onSubmit={values => {
          saveTask(values);
        }}>
        {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
          <View>
            <Input
              size="large"
              style={{marginVertical: 10}}
              value={values.title}
              label={'Title'}
              placeholder=""
              onChangeText={handleChange('title')}
              status={errors.title ? 'danger' : 'success'}
              caption={errors.title}
            />
            <Input
              multiline
              size="large"
              style={{marginVertical: 10}}
              value={values.description}
              label={'description'}
              placeholder=""
              status={errors.description ? 'danger' : 'success'}
              caption={errors.description}
              onChangeText={handleChange('description')}
            />
            <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              label="Start Date"
              date={values.startDate}
              caption={errors.startDate}
              status={errors.startDate ? 'danger' : 'success'}
              onSelectDate={date => setFieldValue('startDate', date)}
            />
            <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              label="End Date"
              date={values.endDate}
              caption={errors.endDate}
              status={errors.endDate ? 'danger' : 'success'}
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
