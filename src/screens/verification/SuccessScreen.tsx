import React, { useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NavigatinActions from '../../navigation/NavigatinActions';

const SuccessScreen = () => {
    const slideAnimationTop = useSharedValue(-hp(80));
    const slideAnimationBottom = useSharedValue(hp(40));

    useEffect(() => {
        slideAnimationTop.value = withTiming(0, { duration: 1000 });
        slideAnimationBottom.value = withTiming(0, { duration: 1000 });
    }, [slideAnimationTop, slideAnimationBottom]);

    const animatedTopImageStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: slideAnimationTop.value }],
        };
    });

    const animatedBottomImageStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: slideAnimationBottom.value }],
        };
    });
    const onContinue = () => {
        NavigatinActions.resetToScreen("Auth")
    }

    return (
        <>
            <Animated.Image
                style={[styles.success, animatedTopImageStyle]}
                source={require('../../assets/images/auth/signupsuccess.png')}
            />
            <Animated.Image
                style={[styles.happy, animatedBottomImageStyle]}
                source={require('../../assets/images/auth/happywoman.png')}
            />
            <TouchableOpacity style={styles.button} onPress={() => onContinue()}>

            </TouchableOpacity>
        </>
    );
};

export default SuccessScreen;

const styles = StyleSheet.create({
    success: {
        width: wp(100),
        height: hp(80),
        resizeMode: 'contain',
    },
    happy: {
        width: wp(100),
        height: hp(40),
        marginTop: -hp(15),
        resizeMode: 'contain',
    },
    button: {
        width: wp(60),
        height: hp(5),
        zIndex: 5,
        position: "absolute",
        top: hp(48.5),
        left: wp(20)
    }
});
