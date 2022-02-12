import {useEffect, useState} from 'react';
import {IBuyItem, ISellItem} from '../models';
import {orderSchemeSubscription} from '../services';

export const useSubScription = (url: string) => {
  const [buyData, setBuyData] = useState<IBuyItem[]>([]);
  const [sellData, setSellData] = useState<ISellItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currencyPair, setCurrencyPair] = useState<string>('BTC_USDT');

  useEffect(() => {
    setLoading(true);
    var isFetched = true;
    var connected = false;
    const ws = new WebSocket(url);
    const applyConnection = () => {
      if (isFetched && !connected) {
        ws.onopen = () => {
          connected = true;
          setBuyData([]);
          setSellData([]);
          ws.send(JSON.stringify(orderSchemeSubscription(currencyPair)));
        };
        ws.onmessage = event => {
          const data = JSON.parse(event.data);
          if (data.symbol === currencyPair) {
            setBuyData(data.buy);
            setSellData(data.sell);
            setLoading(false);
          }
        };
        ws.onerror = error => {
          console.log(error.message);
        };
        ws.onclose = () => {
          connected = false;
        };
      }
    };
    applyConnection();
    return () => {
      isFetched = false;
      connected && ws.close();
    };
  }, [url, currencyPair]);

  return {
    buyData,
    sellData,
    loading,
    currencyPair,
    setCurrencyPair,
  };
};
