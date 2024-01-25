import { Image, ImageBackground, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SafeAreaViewWrapper from '../../../components/SafeareaViewWrapper'
import Colors from '../../../utils/Colors'
import LogoHeader from '../../../components/LogoHeader'
import CustomButton from '../../../components/CustomButton';
import { useTranslation } from 'react-i18next';
import NavigatinActions from '../../../navigation/NavigatinActions';
import { Fonts } from '../../../utils/Fonts';

const BeginScreen = () => {
    const { t } = useTranslation()
    const goToNext = () => {
        NavigatinActions.navigate("VideoTour")
    }
    return (
        <SafeAreaViewWrapper platform={Platform.OS}
            backgroundColor={Colors.secondary}
            style={styles.container}>
            <ImageBackground
                style={styles.container}
                source={require('../../../assets/images/light_background.png')} >
                <View style={styles.logoView}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/images/logo.png')}
                    />
                </View>
                <View style={styles.imageView}>
                    <Image source={require('../../../assets/images/begin.png')}
                        style={styles.image} />
                </View>
                <View style={styles.beginView}>
                    <Text style={styles.headingTxt}>{t('welcome')}</Text>
                    <Text style={styles.subHeadingTxt}>{t("before-started")}</Text>

                    <View style={styles.btnView}>
                        <CustomButton title='lets-begin' onPress={() => goToNext()} />
                    </View>
                </View>

            </ImageBackground>
        </SafeAreaViewWrapper>

    )
}

export default BeginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondary,
    },
    logoView: {
        width: wp(100),
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: wp(2.5),
        alignItems: 'center',
        paddingVertical: hp(0),
    },
    logo: {
        // width: wp(20),
        // height: wp(20)
        width: 55,
        height: 58,
        alignSelf: "center"

    },
    imageView: {
        flex: 0.45,
        paddingHorizontal: wp(3),
        paddingTop: hp(5),
    },
    image: {
        width: "100%",
        resizeMode: "contain",
        height: "85%"
    },
    beginView: {
        flex: 0.55,
        width: wp(100),
    },
    headingTxt: {
        alignSelf: "center",
        fontFamily: Fonts.semibold,
        fontSize: hp(2.4),
        color: Colors.text,
    },
    subHeadingTxt: {
        alignSelf: "center",
        fontFamily: Fonts.medium,
        fontSize: hp(1.6),
        color: Colors.text,
        textAlign: "center",
        marginHorizontal: wp(10),
        marginVertical: hp(2)
    },
    btnView: {
        width: wp(100),
        alignItems: "center"
    }
})