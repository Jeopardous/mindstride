import { CommonActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { NavigationContainerRef } from '@react-navigation/core';

let navigationRef: NavigationContainerRef<any> | null = null;

export const setNavigationRef = (ref: NavigationContainerRef<any> | null) => {
  navigationRef = ref;
};

export const navigate = (name: string, params?: any) => {
  navigationRef?.navigate(name, params);
};

export const goBack = () => {
  navigationRef?.goBack();
};

export const resetToScreen = (name: string) => {
  navigationRef?.dispatch(state => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name }],
    });
    return resetAction;
  });
};

export const dontGoBack = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      Alert.alert(
        'Discard changes?',
        'You have unsaved changes. Are you sure to discard them and leave the screen?',
        [
          { text: "Don't leave", style: 'cancel', onPress: () => {} },
          {
            text: 'Discard',
            style: 'destructive',
            onPress: () => navigation.dispatch(e.data?.action),
          },
        ],
      );
    });

    return unsubscribe;
  }, [navigation]);
};

export const getNavigationRef = () => {
  return navigationRef;
};

export default {
  setNavigationRef,
  navigate,
  resetToScreen,
  goBack,
};
