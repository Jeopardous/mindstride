import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NavigatinActions from '../navigation/NavigatinActions';
import Colors from '../utils/Colors';
import { Fonts } from '../utils/Fonts';
interface HeaderProps {
    isLeftIcon?: boolean,
    isRightIcon?: boolean,
    backgroundColor?: string
}

const LogoHeader: React.FC<HeaderProps> = ({ isLeftIcon = true, isRightIcon = true, backgroundColor }) => {
    return (
        <View style={[styles.headerView, {
            backgroundColor: backgroundColor ? backgroundColor : Colors.white,
        }]}>
            <View style={styles.leftView}>
                {isLeftIcon && <TouchableOpacity onPress={() => { NavigatinActions.goBack() }}
                    style={styles.iconBtn}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/images/back.png')}
                    />
                </TouchableOpacity>}
            </View>

            <View>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/logo.png')}
                />
            </View>
            <View style={styles.rightView}>
                {isRightIcon &&
                    <Text style={styles.rightTxt}>Decline</Text>}
            </View>
        </View>
    )
}

export default LogoHeader

const styles = StyleSheet.create({
    headerView: {
        width: wp(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(2.5),
        alignItems: 'center',
        paddingVertical: hp(0),
    },
    headertxt: {
        fontSize: hp(2),
        color: Colors.black,
        fontFamily: Fonts.semibold,
    },
    leftView: {
        width: wp(30),
    },
    rightView: {
        width: wp(30),
        alignItems: "flex-end",
    },
    icon: {
        width: wp(5),
        height: hp(2.5),
        resizeMode: 'contain',
    },
    iconBtn: {
        width: wp(8),
        height: wp(8),
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightTxt: {
        fontSize: hp(1.6),
        color: Colors.black,
        fontFamily: Fonts.semibold,
    },
    logo: {
        // width: wp(20),
        // height: wp(20)
        width: 55,
        height: 58

    }
})