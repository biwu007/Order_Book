import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, DIMENTIONS} from '../themes';
import {TypeOrder} from '../models';
interface ISelectorItem {
  label: TypeOrder;
  selected: TypeOrder;
  onPress: (value: TypeOrder) => void;
}
export const SelectorItem = ({selected, label, onPress}: ISelectorItem) => {
  const isSelected = selected === label;
  return (
    <TouchableOpacity
      style={styles.button}
      disabled={isSelected}
      onPress={() => {
        onPress(label);
      }}>
      {label === TypeOrder.BUY ? (
        <View style={styles.item}>
          <View style={styles.green} />
          <View style={styles.green} />
        </View>
      ) : label === TypeOrder.SELL ? (
        <View style={styles.item}>
          <View style={styles.red} />
          <View style={styles.red} />
        </View>
      ) : (
        <View style={styles.item}>
          <View style={styles.red} />
          <View style={styles.green} />
        </View>
      )}
      <Text style={isSelected ? styles.title1 : styles.title}>{label}</Text>
    </TouchableOpacity>
  );
};
interface ITypeSelector {
  selected: TypeOrder;
  onChange: (value: TypeOrder) => void;
}

const TypeSelector = ({onChange, selected}: ITypeSelector) => {
  return (
    <View style={[styles.container]}>
      <SelectorItem
        selected={selected}
        label={TypeOrder.ALL}
        onPress={onChange}
      />
      <SelectorItem
        selected={selected}
        label={TypeOrder.BUY}
        onPress={onChange}
      />
      <SelectorItem
        selected={selected}
        label={TypeOrder.SELL}
        onPress={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  container: {
    alignItems: 'center',
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: DIMENTIONS.d12,
    color: COLORS.text,
    marginLeft: DIMENTIONS.d8,
    marginRight: DIMENTIONS.d15,
  },
  title1: {
    fontSize: DIMENTIONS.d12,
    color: COLORS.text,
    marginLeft: DIMENTIONS.d8,
    marginRight: DIMENTIONS.d15,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  red: {
    backgroundColor: COLORS.darkRed,
    width: DIMENTIONS.d10,
    height: DIMENTIONS.d5,
  },
  green: {
    backgroundColor: COLORS.darkGreen,
    width: DIMENTIONS.d10,
    height: DIMENTIONS.d5,
  },
});
export default TypeSelector;
