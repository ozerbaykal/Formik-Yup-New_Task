import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Add} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

const FloatActionButton = props => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="32" color="#fff" />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2ccce4',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70',
    height: '70',
    borderRadius: 50,
    position: 'absolute',
    bottom: '20',
    right: '20',
  },
});
