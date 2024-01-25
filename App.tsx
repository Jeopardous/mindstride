/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CounterScreen from './src/screens/CounterScreen';
import { persistor, store } from './src/store/store';
import { Provider } from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import { I18nextProvider } from 'react-i18next';
import i18next from './src/services/i18next'


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>

      </Provider>
    </I18nextProvider>
  );
}


export default App;
