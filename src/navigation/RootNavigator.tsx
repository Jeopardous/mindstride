import * as React from 'react';
import { NavigationContainer, NavigationContainerRef, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterScreen from '../screens/CounterScreen';
import AuthScreen from '../screens/auth/AuthScreen';
import QuestionScreen from '../screens/verification/onboarding/QuestionScreen';
import NavigatinActions, { setNavigationRef } from './NavigatinActions';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TermsScreen from '../screens/verification/TermsScreen';
import OtpScreen from '../screens/verification/OtpScreen';
import SuccessScreen from '../screens/verification/SuccessScreen';
import BeginScreen from '../screens/verification/onboarding/BeginScreen';
import VideoTourScreen from '../screens/verification/onboarding/VideoTourScreen';

const Stack = createNativeStackNavigator();


const RootNavigator = () => {
  const navigationRef = React.useRef<NavigationContainerRef<ParamListBase>>(null);

  React.useEffect(() => {
    NavigatinActions.setNavigationRef(navigationRef.current); // Set the navigation ref in the NavigationActions file
  }, []); // Run this effect only once on component mount


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          animation: 'slide_from_bottom',
          animationDuration: 600,
          fullScreenGestureEnabled: true

        }}>
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Question" component={QuestionScreen} />
          <Stack.Screen name="Terms" component={TermsScreen} />
          <Stack.Screen options={{

          }} name="Otp" component={OtpScreen} />
          <Stack.Screen options={{
            animation: "fade"
          }} name="Success" component={SuccessScreen} />
          <Stack.Screen options={{
            animation: "fade"
          }} name="Begin" component={BeginScreen} />
          <Stack.Screen options={{
            animation: "fade"
          }} name="VideoTour" component={VideoTourScreen} />




          {/* Add more screens here */}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>

  );
};

export default RootNavigator;