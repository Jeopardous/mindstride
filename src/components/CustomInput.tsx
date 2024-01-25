import React, { forwardRef, useState } from 'react';
import { View, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    interpolate,
} from 'react-native-reanimated';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../utils/Colors';
import { Fonts } from '../utils/Fonts';

interface CustomInputProps extends TextInputProps {
    label: string;
    style?: TextInput['props']['style'];
}

const initialStyle = {
    fontFamily: Fonts.medium,
    fontSize: 16,
    paddingVertical: hp(1.2),
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: Colors.grey,
    color: Colors.text,
};

const CustomInput = forwardRef<TextInput, CustomInputProps>((props, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const animatedValue = useSharedValue(0);

    const handleFocus = () => {
        setIsFocused(true);
        animatedValue.value = withTiming(1, { duration: 250 });
    };

    const handleBlur = () => {
        if (!props.value) {
            setIsFocused(false);
            animatedValue.value = withTiming(0, { duration: 150 });
        }
    };

    const labelStyle = useAnimatedStyle(() => {
        const top = interpolate(animatedValue.value, [0, 1], [10, -8]);
        const fontSize = interpolate(animatedValue.value, [0, 1], [16, 12]);

        // Use opacity instead of color for Animated.Text

        return {
            position: 'absolute',
            left: 0,
            top,
            fontSize,
            zIndex: 1,
            paddingHorizontal: 10,
            fontFamily: Fonts.medium,
            color: Colors.text
        };
    });

    return (
        <View style={{ marginVertical: 10 }}>
            <TouchableOpacity onPress={handleFocus}>
                <Animated.Text style={[labelStyle]}>{props.label}</Animated.Text>
            </TouchableOpacity>


            <TextInput
                {...props}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={props.style || initialStyle}
            />
        </View>
    );
});

export default CustomInput;
