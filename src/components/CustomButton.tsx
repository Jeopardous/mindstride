import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NavigatinActions from '../navigation/NavigatinActions'
import LinearGradient from 'react-native-linear-gradient'
import Colors from '../utils/Colors'
import { Fonts } from '../utils/Fonts'
import { useTranslation } from 'react-i18next';

interface ButtonProps {
    title: string,
    onPress: () => void
}
const CustomButton: React.FC<ButtonProps> = ({ onPress, title }) => {
    const { t } = useTranslation()
    return (
        <TouchableOpacity onPress={onPress} >
            <LinearGradient style={styles.linearBtn} start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }} colors={[Colors.primaryLinear_1,
                Colors.primaryLinear_2, Colors.primaryLinear_3]}
            >
                <Text style={styles.buttonText}>
                    {t(title)}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
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
})