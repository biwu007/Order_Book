import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {COLORS} from '../themes';
interface IContainer {
  children: React.ReactNode;
}

const Container = ({children}: IContainer) => {
  return (
    <View style={[styles.container]}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.primary,
  },
});

export default Container;
