import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useTransition } from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SafeAreaViewWrapper from '../../components/SafeareaViewWrapper'
import Colors from '../../utils/Colors'
import LogoHeader from '../../components/LogoHeader'
import NavigatinActions from '../../navigation/NavigatinActions'
import LinearGradient from 'react-native-linear-gradient'
import { useTranslation } from 'react-i18next'
import { Fonts } from '../../utils/Fonts'
import CustomButton from '../../components/CustomButton';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';

const TermsScreen = () => {
    const { t } = useTranslation()
    const { width, height } = Dimensions.get("window")
    const slideAnimation = useSharedValue(0);
    const animateScreen = () => {
        slideAnimation.value = withTiming(height, { duration: 300 });
    };
    const slideAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateY: slideAnimation.value,
            }]
        };
    });

    const goToNext = () => {
        animateScreen()

        setTimeout(() => {
            NavigatinActions.navigate('Otp')
        }, 0)

    }
    const resetAnimation = () => {
        slideAnimation.value = withTiming(0, { duration: 300 });
    }
    useFocusEffect(() => {
        resetAnimation()
    })
    return (
        <SafeAreaViewWrapper platform={Platform.OS} style={styles.container}>
            <Animated.View
                style={[styles.screen,
                    slideAnimatedStyle
                ]}
            >
                <LogoHeader />
                <View style={styles.body}>
                    <View style={styles.imageView}>
                        <Image source={require('../../assets/images/terms.png')}
                            style={styles.image} />
                    </View>
                    <View style={styles.termsView}>
                        <Text style={styles.termsTxt}>{t('terms')}</Text>
                        <ScrollView contentContainerStyle={{
                            paddingHorizontal: wp(5),
                            paddingTop: hp(1)
                        }}>

                            <Text style={styles.descriptionTxt}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non rhoncus nisl, vel ultrices risus. Sed tellus neque, hendrerit at ligula eget, semper vulputate erat.

Morbi finibus diam a laoreet aliquam. Sed sed tortor cursus, egestas erat vitae, ullamcorper augue. Nullam non est arcu. Integer suscipit sed dolor ac vulputate. Morbi tempor luctus augue eu imperdiet. Phasellus fringilla eget dui ut facilisis. 

Aliquam consequat eu quam vitae semper. Mauris id ante at nunc vehicula fringilla. Etiam eu odio ut elit pulvinar sollicitudin. Duis tempor sem sit.

Amet ante interdum eleifend. Sed vulputate cursus lacinia.

Duis sem orci, efficitur a leo eget, ultrices facilisis ipsum. Donec luctus turpis in nulla blandit lobortis. Praesent gravida risus nisi, at hendrerit dolor bibendum quis. Nulla sed nunc turpis. Nam vehicula nisl non odio interdum faucibus. Nulla dui lectus, posuere auctor vehicula quis, consequat sit amet quam.

Morbi lacus enim, imperdiet id neque tincidunt, egestas venenatis elit. Fusce lobortis laoreet odio, sit amet placerat ipsum. Nullam convallis, tortor a varius pellentesque, sem urna efficitur sem, at pretium turpis dolor a turpis. Pellentesque tempus tempor turpis, at maximus odio volutpat vel.`}</Text></ScrollView>
                    </View>

                </View>
                <View style={styles.footer}>
                    <CustomButton title='create-account' onPress={() => goToNext()} />
                </View>
            </Animated.View>
        </SafeAreaViewWrapper>
    )
}

export default TermsScreen

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
        flex: 0.45,
        paddingHorizontal: wp(3)
    },
    image: {
        width: "90%",
        resizeMode: "contain",
        flex: 1,

    },
    termsView: {
        flex: 0.55,
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
    footer: {
        flex: 0.2,
        alignItems: 'center',
        backgroundColor: Colors.white,
        elevation: Platform.OS === "android" ? 5 : 0,
        shadowColor: '#3E3C49',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        zIndex: 10
    },
    linearBtn: {
        width: wp(60),
        height: hp(5),
        borderRadius: 5,
        justifyContent: 'center',
        padding: 10,
        marginTop: hp(2)
    },
    buttonText: {
        fontFamily: Fonts.semibold,
        fontSize: hp(2.2),
        color: Colors.white,
        alignSelf: "center"
    },
    descriptionTxt: {
        fontFamily: Fonts.medium,
        fontSize: hp(1.6),
        color: Colors.text,
        alignSelf: "center"
    },
    termsTxt: {
        fontFamily: Fonts.medium,
        fontSize: hp(1.6),
        color: Colors.primary,
        alignSelf: "center",
        marginVertical: hp(2)
    }

})