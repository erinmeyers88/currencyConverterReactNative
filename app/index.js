import React from 'react';
import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $primaryBlue: '#4f6d7a',
  $white: '#fff',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGray: "#f0f0f0",
  $darkText: '#343434'
});

export default () => <CurrencyList/>;