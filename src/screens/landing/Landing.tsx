import React from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import {styles} from './style';
import {
  Container,
  Header,
  DropDownPicker,
  TypeSelector,
  ListContent,
} from '../../components';
import {TypeOrder} from '../../models';
import {useSubScription} from '../../hooks/useSubScription';
import {CONSTANTS} from '../../themes';

export interface ILanding {
  selected: TypeOrder;
  setSelected: React.Dispatch<React.SetStateAction<TypeOrder>>;
}

const Landing = (props: ILanding) => {
  const {selected} = props;
  const {buyData, sellData, loading, currencyPair, setCurrencyPair} =
    useSubScription(CONSTANTS.WEB_SOCKET_URL);
  return (
    <Container>
      <Header title={'Order Book'} />
      <View style={styles.controlContent}>
        <DropDownPicker value={currencyPair} onSelect={setCurrencyPair} />
        <TypeSelector selected={selected} onChange={props.setSelected} />
      </View>
      {loading ? (
        <ActivityIndicator
          style={styles.loading}
          size={'large'}
          color={'#fff'}
        />
      ) : null}
      {!loading && selected !== TypeOrder.SELL && (
        <FlatList
          data={buyData}
          renderItem={({item, index}) => (
            <ListContent index={index} data={item} />
          )}
        />
      )}
      {!loading && selected === TypeOrder.ALL && (
        <View style={styles.spacing} />
      )}
      {!loading && selected !== TypeOrder.BUY && (
        <FlatList
          data={sellData}
          renderItem={({item, index}) => (
            <ListContent isBuyData={false} index={index} data={item} />
          )}
        />
      )}
    </Container>
  );
};

export default Landing;
