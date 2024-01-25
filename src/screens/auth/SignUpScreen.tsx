import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Dimensions, Platform, Pressable, Image } from 'react-native';
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
import Colors from '../../utils/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Fonts } from '../../utils/Fonts';
import LinearGradient from 'react-native-linear-gradient';
import NavigatinActions from '../../navigation/NavigatinActions';
import { useTranslation } from 'react-i18next';
import CustomInput from '../../components/CustomInput';
import { signupFields } from '../../utils/Constants';
interface BottomSheetProps {
    onToggle: () => void;
    isOpen: boolean;
    animateScreen: () => void
}

interface SignupField {
    name: string;
    placeholder: string;
}
const SignUpScreen: React.FC<BottomSheetProps> = ({ onToggle, isOpen, animateScreen }) => {
    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ""
    });
    const [checked, setChecked] = useState(false)
    const [focusedInput, setFocusedInput] = useState<string>('');
    const { t } = useTranslation()

    const { width, height } = Dimensions.get("window")
    const signupRef = useRef<View>(null);
    const offset = useSharedValue(height)
    const translateY = useAnimatedStyle(() => ({
        transform: [{ translateY: offset.value }]
    }))

    const animateUpScreen = () => {
        offset.value = withTiming(0, { duration: 600 });
    };

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

    const handleInputFocus = (fieldName: string) => {
        setFocusedInput(fieldName);
    };
    const handleInputChange = (fieldName: string, value: string) => {

        setFormValues(prevState => ({
            ...prevState,
            [fieldName]: value,
        }));

    };
    const goToNextScreen = () => {
        animateScreen()
        NavigatinActions.navigate("Terms")

    }
    useEffect(() => {
        animateUpScreen()
    }, [])

    return (
        <GestureDetector gesture={pan}>
            <Animated.View
                // entering={SlideInDown}
                //     exiting={SlideOutDown}
                style={[styles.bottomSheet, translateY]} ref={signupRef}>
                <View style={styles.sheetHeader}>
                    <Text style={styles.headerTxt}>
                        {t("create-new")}
                    </Text>

                </View>
                {signupFields.map((field: SignupField, index: number) => {
                    const fieldName = field.name as keyof typeof formValues; // Type assertion
                    return (
                        <CustomInput
                            key={index}
                            value={formValues[fieldName]}
                            onChangeText={(value) => handleInputChange(field.name, value)}
                            label={t(field.placeholder)} />

                    )
                })}

                <View style={styles.checkboxView}>
                    <TouchableOpacity onPress={() => setChecked(!checked)}>
                        {checked ?
                            <Image style={styles.infoIcon}
                                source={require("../../assets/images/auth/checkedbox.png")}

                            /> : <Image style={styles.infoIcon}
                                source={require("../../assets/images/auth/checkbox.png")}

                            />}
                    </TouchableOpacity>
                    <Text style={styles.checkTxt}>
                        {t("age-checkbox")}
                    </Text>
                    <Image style={styles.infoIcon} source={require("../../assets/images/auth/info.png")} />


                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={() => goToNextScreen()} style={styles.button}>
                        <LinearGradient style={styles.linearBtn} start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }} colors={[Colors.primaryLinear_1,
                            Colors.primaryLinear_2, Colors.primaryLinear_3]}
                        >
                            <Text style={styles.buttonText}>
                                {t("signup")}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
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
    },
    checkboxView: {
        flexDirection: "row",
        width: wp(90),
        alignItems: "center",
        justifyContent: "center",
        padding: wp(3),
    },
    checkTxt: {
        fontFamily: Fonts.medium,
        fontSize: hp(1.8),
        color: Colors.text,
        alignSelf: "center"
    },
    infoIcon: {
        width: wp(6),
        height: wp(6),
        marginHorizontal: wp(2)
    }

});

export default SignUpScreen;
