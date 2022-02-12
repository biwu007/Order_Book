import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSizeChecker} from '../hooks';
import {IBuyItem} from '../models';
import {COLORS} from '../themes';
interface IListContent {
  index: number;
  data: IBuyItem;
  isBuyData?: boolean;
}

const ListContent = ({data, isBuyData = true, index}: IListContent) => {
  const [itemBgColor, setItemBgColor] = useState<string | undefined>(undefined);
  const previousItemSize = useSizeChecker(data.size);
  useEffect(() => {
    let isFetched = true;
    const changeBg = () => {
      if (isFetched && previousItemSize) {
        if (parseFloat(data.size) > parseFloat(previousItemSize)) {
          setItemBgColor(
            index % 2 === 0 ? COLORS.lightGreen0 : COLORS.lightGreen1,
          );
        } else {
          setItemBgColor(index % 2 === 0 ? COLORS.lightRed0 : COLORS.lightRed1);
        }
        setTimeout(() => {
          isFetched && setItemBgColor(undefined);
        }, 100);
      }
    };
    changeBg();
    return () => {
      isFetched = false;
    };
  }, [data.size, previousItemSize, index, setItemBgColor]);

  return (
    <View
      style={[
        styles.constainer,
        {
          backgroundColor:
            itemBgColor ||
            (index % 2 === 0 ? COLORS.transparent : COLORS.darkBlue),
        },
      ]}>
      <Text style={{color: isBuyData ? COLORS.bg1 : COLORS.bg2}}>
        {data.size}
      </Text>
      <Text>{data.limit_price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});
export default ListContent;
