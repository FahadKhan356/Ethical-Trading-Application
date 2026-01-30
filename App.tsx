import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  LogBox,
  Platform,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/Store/store';
import AppNavigation from './src/Navigation/AppNavigation';
import {COLORS} from './src/Constants/COLORS';
import { configureGoogleSignIn } from './src/config/googleConfig';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
    configureGoogleSignIn();
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate
          loading={<ActivityIndicator size="large" color={COLORS.white} />}
          persistor={persistor}
        >
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          >
            <NavigationContainer>
              <AppNavigation />
            </NavigationContainer>

            <FlashMessage position="top" />
          </KeyboardAvoidingView>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
