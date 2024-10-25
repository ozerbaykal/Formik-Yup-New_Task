import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import FloatActionButton from '../../components/UI/floatActionButton';
import {ADDTASKS} from '../../utils/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCard from '../../components/home/taskCard';

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [tasks, setTasks] = useState([]);

  const getTask = async () => {
    let myTask = [];

    try {
      const task = await AsyncStorage.getItem('task');
      console.log('jason', task);
      myTask.push(JSON.parse(task));
      console.log(task);
      setTasks(myTask);
    } catch (error) {
      console.log(error);
    }
  };
  const onRefresh = () => {
    setRefreshing(true);
    getTask();
    setRefreshing(false);
  };
  useEffect(() => {
    getTask();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({item}) => <TaskCard item={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefreshing={onRefresh} />
        }
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDTASKS)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
