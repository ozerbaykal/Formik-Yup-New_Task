import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import AppColors from '../../theme/color';
import {
  ArrowCircleRight2,
  ChartCircle,
  Clock,
  CloseCircle,
  TickCircle,
} from 'iconsax-react-native';

const HeaderComponent = ({ongoing, pending, complated, cancel}) => {
  const tasks = [
    {
      id: 1,
      title: 'onGoing',
      color: AppColors.ONGOING,
      icon: <ChartCircle size={32} color={AppColors.WHITE} />,
      count: ongoing,
    },
    {
      id: 2,
      title: 'Pending',
      color: AppColors.PENDING,
      icon: <Clock size="32" color={AppColors.WHITE} />,
      count: pending,
    },
    {
      id: 3,
      title: 'Complated',
      color: AppColors.COMPLATED,
      icon: <TickCircle size="32" color={AppColors.WHITE} />,
      count: complated,
    },
    {
      id: 4,
      title: 'Cancel',
      color: AppColors.CANCEL,
      icon: <CloseCircle size="32" color={AppColors.WHITE} />,
      count: cancel,
    },
  ];

  //renderitem da ekrana basağaımız card componenti
  const Task = ({item}) => {
    return (
      <Pressable
        style={{
          backgroundColor: item.color,
          width: '45%',
          padding: 10,
          margin: 10,
        }}>
        {item.icon}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View>
            <Text
              style={{
                color: AppColors.WHITE,
                fontWeight: '600',
                fontSize: 16,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                color: AppColors.WHITE,
                fontWeight: '600',
                fontSize: 16,
                marginTop: 5,
              }}>
              {item.count} Task
            </Text>
          </View>

          <View>
            <ArrowCircleRight2 size={28} color={AppColors.WHITE} />
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({item}) => <Task item={item} />}
        numColumns={2}
      />
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            margin: 10,
            marginHorizontal: 20,
          }}>
          All Task
        </Text>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
