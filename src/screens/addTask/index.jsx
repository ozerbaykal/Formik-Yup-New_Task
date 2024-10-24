import {Input} from '@ui-kitten/components';
import {Formik} from 'formik';
import {StyleSheet, View} from 'react-native';

const AddTask = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          title: '',
          description: '',
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
            />
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
  },
});
