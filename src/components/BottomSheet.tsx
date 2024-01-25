import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Dimensions, Platform } from 'react-native';
import Animated, {
    SlideInDown,
    SlideInUp,
    SlideOutDown,
    runOnJS,
    runOnUI,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import Colors from '../utils/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Fonts } from '../utils/Fonts';
import CustomInput from './CustomInput';
import LinearGradient from 'react-native-linear-gradient';
import NavigatinActions from '../navigation/NavigatinActions';
import { useTranslation } from 'react-i18next';
interface BottomSheetProps {
    onToggle: () => void; // Define the type for onClose
    isOpen: boolean;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ onToggle, isOpen }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const { t } = useTranslation()

    const { width, height } = Dimensions.get("window")
    const bottomSheetRef = useRef<View>(null);
    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const offset = useSharedValue(0)
    const translateY = useAnimatedStyle(() => ({
        transform: [{ translateY: offset.value }]
    }))

    const pan = Gesture.Pan().onChange((event) => {

        const offsetDelta = event.changeY + offset.value
        const clamp = Math.max(100, offsetDelta)
        offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp)

    }).onFinalize(() => {
        if (offset.value < height / 5) {
            offset.value = withSpring(0)
        } else {
            runOnJS(onToggle)()
        }

    })


    return (
        <GestureDetector gesture={pan}>
            <Animated.View entering={SlideInDown}
                exiting={SlideOutDown}
                style={[styles.bottomSheet, translateY]} ref={bottomSheetRef}>
                <View style={styles.sheetHeader}>
                    <Text style={styles.headerTxt}>
                        {t("signin-account")}
                    </Text>

                </View>
                <CustomInput value={email} onChangeText={(txt) => setEmail(txt)} ref={emailInputRef} label={t("email-phone")} />
                <CustomInput value={password} ref={passwordInputRef} label={t("password")} onChangeText={(txt) => setPassword(txt)} secureTextEntry />
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={() => { NavigatinActions.navigate("Question") }} style={styles.button}>
                        <LinearGradient style={styles.linearBtn} start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }} colors={[Colors.primaryLinear_1,
                            Colors.primaryLinear_2, Colors.primaryLinear_3]}
                        >
                            <Text style={styles.buttonText}>
                                {t("signin")}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                    <Text style={styles.forgetTxt}>{t("forgot-password")}</Text>
                </View>



            </Animated.View>
        </GestureDetector>
    );
};

const styles = StyleSheet.create({

    bottomSheet: {
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: wp(5),
        paddingVertical: hp(2),
        elevation: Platform.OS === "android" ? 10 : 0,
        position: "absolute",
        bottom: 0,
        shadowColor: '#3E3C49',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },

    submitButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
    },
    openButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    openButtonText: {
        color: 'white',
        fontSize: 16,
    },
    closeButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
    sheetHeader: {
        width: wp(90),
        height: hp(5),
        justifyContent: "center",
        alignItems: "center",
        marginBottom: hp(3)
    },
    headerTxt: {
        fontFamily: Fonts.semibold,
        fontSize: hp(2.2),
        color: Colors.primary
    },
    button: {
        width: wp(60),
        height: hp(5.5),

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
    buttonView: {
        width: wp(90),
        alignItems: "center",
        paddingVertical: 10
    },
    forgetTxt: {
        fontFamily: Fonts.medium,
        fontSize: hp(1.8),
        color: Colors.primary,
    }
});

export default BottomSheet;
