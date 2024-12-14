import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import AppColors from '../../theme/color';
import {
  ArrowCircleRight2,
  ChartCircle,
  Clock,
  CloseCircle,
  TickCircle,
} from 'iconsax-react-native';

const HeaderComponent = () => {
  const tasks = [
    {
      id: 1,
      title: 'onGoing',
      color: AppColors.ONGOING,
      icon: <ChartCircle size={32} color={AppColors.WHITE} />,
    },
    {
      id: 2,
      title: 'Pending',
      color: AppColors.PENDING,
      icon: <Clock size="32" color={AppColors.WHITE} />,
      //count: pending,
    },
    {
      id: 3,
      title: 'Complated',
      color: AppColors.COMPLATED,
      icon: <TickCircle size="32" color={AppColors.WHITE} />,
      //count: complated,
    },
    {
      id: 4,
      title: 'Cancel',
      color: AppColors.CANCEL,
      icon: <CloseCircle size="32" color={AppColors.WHITE} />,
      //count: cancel,
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
          <Text
            style={{color: AppColors.WHITE, fontWeight: '600', fontSize: 16}}>
            {item.title}
          </Text>
          <Text>{10}</Text>
        </View>
        <View>
          <ArrowCircleRight2 size={32} color={AppColors.WHITE} />
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
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
