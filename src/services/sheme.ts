export const orderSchemeSubscription = (currencyPair: string) => ({
  type: 'subscribe',
  payload: {
    channels: [
      {
        name: 'l2_orderbook',
        symbols: [currencyPair],
      },
    ],
  },
});
