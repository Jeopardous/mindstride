import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import React from 'react';
import Colors from '../utils/Colors';
import { Fonts } from '../utils/Fonts';
import { NavigationProp } from '@react-navigation/native';
import NavigatinActions from '../navigation/NavigatinActions';
interface OnboardingHeaderProps {
  navigation: () => void;
}
const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({ navigation }) => {

  return (
    <View style={styles.headerView}>
      <TouchableOpacity onPress={() => { NavigatinActions.goBack() }} style={styles.iconBtn}>
        <Image
          style={styles.icon}
          source={require('../assets/images/back.png')}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.headertxt}>Onboarding Assessment!</Text>
      </View>
      <View style={styles.iconBtn}></View>
    </View>
  );
};

export default OnboardingHeader;

const styles = StyleSheet.create({
  headerView: {
    width: wp(100),
    height: hp(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2.5),
    alignItems: 'center',
    backgroundColor: '#FDEADA',
  },
  headertxt: {
    fontSize: hp(2),
    color: Colors.black,
    fontFamily: Fonts.semibold,
  },
  iconBtn: {
    width: wp(8),
    height: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: wp(5),
    height: hp(2.5),
    resizeMode: 'contain',
  },
});
