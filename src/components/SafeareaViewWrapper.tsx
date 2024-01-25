import React from 'react';
import { SafeAreaView, View, ViewStyle } from 'react-native';
import Colors from '../utils/Colors';
import { useRoute } from '@react-navigation/native';

interface SafeAreaViewWrapperProps {
  children: React.ReactNode;
  style?: ViewStyle;
  platform?: 'ios' | 'android' | "windows" | "macos" | "web";
  backgroundColor?: String
}

const SafeAreaViewWrapper: React.FC<SafeAreaViewWrapperProps> = ({
  children,
  style,
  platform = 'ios',
  backgroundColor
}) => {
  const route = useRoute()
  let color = backgroundColor ? backgroundColor : Colors.white


  console.log("ABSHASAS:::", route)
  return platform === 'ios' ? (
    <View style={[style]}>
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: color,
        }}
      ></View>
      {children}
    </View>
  ) : (
    <SafeAreaView style={[style]}>{children}</SafeAreaView>
  );
};

export default SafeAreaViewWrapper;
