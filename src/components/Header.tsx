import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, DIMENTIONS} from '../themes';
interface IHeader {
  title: String;
}

const Header = (props: IHeader) => {
  return (
    <View style={[styles.header]}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: DIMENTIONS.d30,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: DIMENTIONS.d18,
    color: COLORS.text,
  },
});
export default Header;
