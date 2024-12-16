import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColors from '../../theme/color';
import {Divider} from '@ui-kitten/components';
import moment from 'moment';
import {setCategory} from '../../utils/function';
import {taskValues} from '../../utils/constant';

const TaskDetail = ({route}) => {
  const {item} = route?.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Title:</Text>
          <Text>{item.title}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Description:</Text>
          <Text>{item.description}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Start Date:</Text>
          <Text>{moment(item.startDate).format('YYYY/MM/DD')}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>End Date:</Text>
          <Text>{moment(item.endDate).format('YYYY/MM/DD')}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Category:</Text>
          <Text>{setCategory(item.category)}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Statatus:</Text>
          <Text>
            {taskValues.find(task => task.status === item?.status).title}
          </Text>
        </View>
        <Divider />
      </ScrollView>
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    padding: 10,
  },
});
