import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS, DIMENTIONS, STRINGS} from '../themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';

interface IDropDownPicker {
  value: string;
  onSelect: (value: string) => void;
}

const DropDownPicker = ({onSelect}: IDropDownPicker) => {
  const [selected, setSelected] = useState<String>(STRINGS.channelArr[0]);
  function handleOnChange(value: string) {
    setSelected(value);
    onSelect(value);
  }
  return (
    <View style={[styles.container]}>
      <SelectDropdown
        defaultValue={selected}
        data={STRINGS.channelArr}
        onSelect={selectedItem => {
          handleOnChange(selectedItem);
        }}
        buttonTextAfterSelection={selectedItem => {
          return selectedItem;
        }}
        rowTextForSelection={item => {
          return item;
        }}
        renderDropdownIcon={() => {
          return (
            <Icon name="caret-down" size={DIMENTIONS.d15} color={COLORS.text} />
          );
        }}
        dropdownIconPosition={'right'}
        buttonTextStyle={styles.buttonTextStyle}
        buttonStyle={styles.buttonStyle}
        rowStyle={styles.rowStyle}
        rowTextStyle={styles.rowTextStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: DIMENTIONS.d10,
    color: COLORS.text,
    textAlign: 'left',
    marginLeft: DIMENTIONS.d5,
  },
  rowTextStyle: {
    fontSize: DIMENTIONS.d10,
    textAlign: 'left',
    marginLeft: DIMENTIONS.d15,
  },
  rowStyle: {height: DIMENTIONS.d25},
  buttonStyle: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.text,
    width: '100%',
    height: DIMENTIONS.d30,
  },
  container: {
    alignItems: 'center',
    width: '30%',
  },
  title: {
    fontSize: DIMENTIONS.d18,
    color: COLORS.text,
  },
});
export default DropDownPicker;
