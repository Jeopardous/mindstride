import { Dimensions, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SafeAreaViewWrapper from '../../components/SafeareaViewWrapper'
import LogoHeader from '../../components/LogoHeader'
import Colors from '../../utils/Colors'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Fonts } from '../../utils/Fonts'
import CustomButton from '../../components/CustomButton'
import OTPTextView from 'react-native-otp-textinput'
import NavigatinActions from '../../navigation/NavigatinActions'
const OtpScreen = () => {
    const { t } = useTranslation()
    const { width, height } = Dimensions.get("window")

    const [timer, setTimer] = useState(30); // Initial timer value in seconds
    const timerRef = useRef(null);
    const flex = useSharedValue(0.45)
    const slideAnimation = useSharedValue(height);
    const animateScreen = () => {
        slideAnimation.value = withTiming(0, { duration: 300 });
    };
    const slideAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateY: slideAnimation.value,
            }]
        };
    });
    const otpAnimatedStyle = useAnimatedStyle(() => {
        return {
            flex: flex.value
        }
    })
    const animateOtpView = () => {
        flex.value = withSpring(Platform.OS === "ios" ? 1.6 : 1.1)
    }
    const reverseAnimateOtpView = () => {
        flex.value = withTiming(0.45, { duration: 100 })
    }
    useEffect(() => {
        animateScreen()
    }, [])

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                animateOtpView()

            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                reverseAnimateOtpView()

            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);


    const goToNext = () => {
        NavigatinActions.navigate("Success")
    }

    return (
        <SafeAreaViewWrapper platform={Platform.OS} style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <Animated.View
                    style={[styles.screen,
                        slideAnimatedStyle
                    ]}
                >
                    <LogoHeader isLeftIcon={true} isRightIcon={false} />
                    <View style={styles.body}>
                        <View style={styles.imageView}>
                            <Image source={require('../../assets/images/otp.png')}
                                style={styles.image} />
                        </View>
                        <Animated.View style={[styles.otpView, otpAnimatedStyle]}>
                            <Text style={styles.enterOtpTxt}>{t('enter-otp')}</Text>
                            <View>
                                <Text style={styles.otpInfo}>{t('sent-otp')}</Text>
                                <View style={styles.phoneView}>
                                    <Text style={styles.phoneTxt}>+1 123 123 1234</Text>
                                    <Image source={require('../../assets/images/auth/editphone.png')} style={styles.editIcon} />
                                </View>
                                <Text style={styles.otpInfo}>{t('verify-otp')}</Text>
                                <OTPTextView
                                    inputCount={6}
                                    tintColor={Colors.primary}
                                    textInputStyle={styles.textInput}
                                />

                                <View style={styles.resendView}>
                                    <Text style={styles.secTxt}>{`${timer} ${t('sec')}`}</Text>
                                    <TouchableOpacity style={styles.resend}>
                                        <Text style={styles.resendTxt}>{t("resend-otp")}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Animated.View>

                    </View>
                    <View style={styles.footer}>
                        <CustomButton title='submit' onPress={() => goToNext()} />
                    </View>
                </Animated.View>
            </KeyboardAvoidingView>
        </SafeAreaViewWrapper>
    )
}

export default OtpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    screen: {
        flex: 1
    },
    body: {
        flex: 1,
    },
    imageView: {
        flex: 0.55,
        paddingHorizontal: wp(3),
        paddingTop: hp(5)
    },
    image: {
        width: "90%",
        resizeMode: "contain",
        flex: 0.8,

    },
    otpView: {
        flex: 0.45,
        width: "100%",
        backgroundColor: Colors.white,
        paddingHorizontal: wp(5),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: Platform.OS === "android" ? 10 : 0,
        shadowColor: '#3E3C49',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        zIndex: 5
    },
    enterOtpTxt: {
        fontFamily: Fonts.medium,
        fontSize: hp(1.6),
        color: Colors.primary,
        alignSelf: "center",
        marginVertical: hp(2)
    },
    otpInfo: {
        fontFamily: Fonts.medium,
        fontSize: hp(1.6),
        color: Colors.text,
        marginVertical: hp(1)
    },
    phoneView: {
        flexDirection: "row",
        alignContent: "center",
        marginVertical: hp(1)
    },
    resendView: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: hp(1.5)
    },
    resend: {
        marginLeft: wp(2)
    },
    secTxt: {
        fontFamily: Fonts.medium,
        fontSize: hp(1.6),
        color: Colors.text,
    },
    resendTxt: {
        fontFamily: Fonts.bold,
        fontSize: hp(1.6),
        color: Colors.otp,
    },
    phoneTxt: {
        fontFamily: Fonts.bold,
        fontSize: hp(2.4),
        color: Colors.text,
    },
    editIcon: {
        width: wp(6),
        height: wp(6),
        resizeMode: "contain",
        marginLeft: wp(6)
    },

    textInput: {
        fontFamily: Fonts.medium,
        textAlignVertical: 'center',
        color: Colors.text,
        textAlign: 'center',
        fontSize: hp(3.2),
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey,
    },
    footer: {
        flex: 0.2,
        alignItems: 'center',
        backgroundColor: Colors.white,
        elevation: Platform.OS === "android" ? 5 : 0,
        zIndex: 5,
    },

})