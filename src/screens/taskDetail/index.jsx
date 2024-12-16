import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColors from '../../theme/color';
import {Button, Divider} from '@ui-kitten/components';
import moment from 'moment';
import {setCategory} from '../../utils/function';
import {status, taskValues} from '../../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskDetail = ({route}) => {
  const {item} = route?.params;

  //taskları silecek fonsiyon
  const deleteTask = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks === null) {
        return; //görev yoksa durdur
      }
      const tasks = JSON.parse(savedTasks);

      //görevi sil

      const filteredTasks = tasks.filter(task => task.id !== item.id);

      //filtrelenmiş görevleri depola

      await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));
    } catch (error) {
      console.log('Bir hata oluştu', error);
    }
  };

  //update butonları için güncelleme
  const updatedTask = async newStatus => {
    try {
      //görevleri al
      const savedTasks = await AsyncStorage.getItem('tasks');

      if (savedTasks === null) {
        return;
      }
      const tasks = JSON.parse(savedTasks);

      //güncellencek görevi bul

      const updatedTask = tasks.map(task => {
        if (task.id === item.id) {
          return {
            ...task,
            status: newStatus, //statusu değiştiriyoruz
          };
        }
        return tasks;
      });
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTask));
    } catch (error) {
      console.log(error);
    }
  };

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

      <View>
        <Button
          onPress={() => updatedTask(status.PENDING)}
          style={styles.button}
          status="primary">
          START
        </Button>
        <Button
          onPress={() => updatedTask(status.COMPLETED)}
          style={styles.button}
          status="success">
          COMPLETED
        </Button>
        <Button
          onPress={() => updatedTask(status.CANCEL)}
          style={styles.button}
          status="danger">
          CANCEL
        </Button>
        <Button onPress={deleteTask} style={styles.button} status="warning">
          DELETE
        </Button>
      </View>
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
  button: {
    marginTop: 10,
  },
});
