import { StyleSheet, Text, View, Image, Dimensions, Platform, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../utils/Colors';
import SafeAreaViewWrapper from '../../components/SafeareaViewWrapper';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../../utils/Fonts';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import BottomSheet from '../../components/BottomSheet';
import { useTranslation } from 'react-i18next';
import i18next from '../../services/i18next';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import LottieView from 'lottie-react-native';
import { useFocusEffect } from '@react-navigation/native';

const AuthScreen = () => {

  const [isSignIn, setIsSignIn] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [speed, setSpeed] = useState(1)

  const slideAnimation = useSharedValue(0);
  const fadeAnimation = useSharedValue(1);
  const animationRef = useRef<LottieView>(null);

  const { t } = useTranslation()

  const toggleSignInSheet = () => {
    setIsSignIn(false)
    setSpeed(-2.5)
    animationRef.current?.play(0, -1);
  }
  const toggleSignUpSheet = () => {
    setIsSignUp(false)
    setSpeed(-2.5)
    animationRef.current?.play(0, -1);
  }
  const animateScreen = () => {
    fadeAnimation.value = withTiming(0, { duration: 500 });
  };

  const resetAnimation = () => {
    fadeAnimation.value = withTiming(1, { duration: 500 });
  };

  const fadeAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnimation.value,
    };
  });

  useEffect(() => {

  }, [])

  useFocusEffect(() => {
    resetAnimation()
  })

  const onSignIn = () => {
    setIsSignIn(true)
    setSpeed(1)
    animationRef.current?.play();
  }
  const onSignUp = () => {
    setIsSignUp(true)
    setSpeed(1)
    animationRef.current?.play();
  }
  return (
    <SafeAreaViewWrapper platform={Platform.OS} style={styles.container}>
      <Animated.View
        style={[
          styles.screen,
          fadeAnimatedStyle
        ]}
      >

        <LottieView
          ref={animationRef}
          style={{
            width: wp(100),
            height: hp(100),
            marginTop: hp(-5),
          }}
          source={require('../../utils/splash_animation.json')}
          loop={false}
          autoPlay={false}
          speed={speed}
        />
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => onSignIn()} style={styles.button}>
            <LinearGradient style={styles.linearBtn} start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }} colors={[Colors.primaryLinear_1,
              Colors.primaryLinear_2, Colors.primaryLinear_3]}
            >
              <Text style={styles.buttonText}>
                {t('signin')}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSignUp()} style={styles.secondaryBtn}>

            <Text style={styles.secondaryBtnTxt}>
              {t('signup')}
            </Text>
          </TouchableOpacity>
        </View>



        {isSignIn && <SignInScreen isOpen={isSignIn} onToggle={toggleSignInSheet} />}
        {isSignUp && <SignUpScreen
          isOpen={isSignUp}
          onToggle={toggleSignUpSheet}
          animateScreen={animateScreen} />}
      </Animated.View>
    </SafeAreaViewWrapper>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  screen: {
    flex: 1
  },
  logo: {
    width: wp(25),
    height: hp(14),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(5),
    alignSelf: 'center',
  },
  flower_1: {
    width: wp(21),
    height: hp(10),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(19),
    left: wp(5),
  },
  flower_2: {
    width: wp(5),
    height: hp(2),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(26),
    left: wp(62),
  },
  flower_3: {
    width: wp(12),
    height: hp(5),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(21),
    right: wp(12),
  },
  flower_4: {
    width: wp(24),
    height: hp(8),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(35),
    left: -wp(12),
  },
  flower_5: {
    width: wp(12),
    height: hp(5),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(30),
    right: wp(5),
  },
  flower_6: {
    width: wp(16),
    height: hp(8),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(37),
    right: -wp(8),
  },
  flower_7: {
    width: wp(11),
    height: hp(5),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(51.5),
    left: wp(11),
  },
  flower_8: {
    width: wp(11),
    height: hp(5),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(51),
    right: wp(5),
  },
  flower_9: {
    width: wp(45),
    height: hp(20),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(61),
    left: -wp(20),
  },
  flower_10: {
    width: wp(11),
    height: hp(5),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(61),
    left: wp(22),
  },
  flower_11: {
    width: wp(40),
    height: hp(23),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(51),
    right: -wp(20),
  },
  flower_12: {
    width: wp(14),
    height: hp(10),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(69),
    left: wp(35),
  },
  flower_13: {
    width: wp(18),
    height: hp(14),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(72),
    right: wp(20),
  },
  brain: {
    width: wp(80),
    height: hp(35),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(33),
    left: wp(9),
    zIndex: -5,
  },
  button: {
    width: wp(40),
    height: hp(5.5),

  },
  secondaryBtn: {
    width: wp(40),
    height: hp(5.5),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
    justifyContent: "center"
  },
  secondaryBtnTxt: {
    fontFamily: Fonts.semibold,
    fontSize: hp(2.2),
    color: Colors.primary,
    alignSelf: "center"
  },
  linearBtn: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    justifyContent: 'center',
    padding: 10,
  },
  buttonText: {
    fontFamily: Fonts.semibold,
    fontSize: hp(2.2),
    color: Colors.white,
    alignSelf: "center"
  },
  footer: {
    width: wp(100),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    bottom: hp(5)
  }
});
