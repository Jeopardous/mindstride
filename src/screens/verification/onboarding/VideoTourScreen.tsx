import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Video from 'react-native-video';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SafeAreaViewWrapper from '../../../components/SafeareaViewWrapper'
import Colors from '../../../utils/Colors'
import LogoHeader from '../../../components/LogoHeader'
import CustomButton from '../../../components/CustomButton'
import { AudioURL, TourVideoURL } from '../../../utils/Constants';

const VideoTourScreen = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [showControls, setShowControls] = useState(true);
    const goToNext = () => {

    }
    const onBufferVideo = ({ isBuffering }: any) => {
        console.log(`Is Buffering: ${isBuffering}`);
    };
    const onLoadStart = () => {
        console.log('Loading started!');
    };

    const onLoad = ({ duration }: any) => {
        setDuration(duration);
        console.log(`Video Duration: ${duration}`);
    };

    const onSeek = ({ currentTime }: any) => {
        setCurrentTime(currentTime);
        console.log(`Seeked to: ${currentTime}`);
    };

    const onError = (error: any) => {
        console.error('Video error:', error);
    };

    const seekTo = (seconds: any) => {
        if (videoRef?.current) {
            videoRef?.current?.seek(seconds);
        }
        setCurrentTime(seconds);
        setShowControls(true);
    };

    const toggleControls = () => {
        setShowControls(!showControls);
    };

    return (
        <SafeAreaViewWrapper platform={Platform.OS}
            backgroundColor={Colors.white}
            style={styles.container}>
            <LogoHeader isLeftIcon={false} isRightIcon={false} />
            <View style={styles.body}>

                <View style={styles.videoContainer}>
                    <Video
                        ref={videoRef}
                        source={{ uri: AudioURL }}
                        style={styles.videoView}
                        resizeMode='contain'
                        controls={true}
                        onBuffer={onBufferVideo}
                    />
                </View>

            </View>
            <View style={styles.footer}>
                <CustomButton title='skip-video' onPress={() => goToNext()} />
            </View>
        </SafeAreaViewWrapper>
    )
}

export default VideoTourScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    body: {
        flex: 1,
    },
    footer: {
        flex: 0.2,
        alignItems: 'center',
        backgroundColor: Colors.white,
        elevation: Platform.OS === "android" ? 5 : 0,
        zIndex: 5,
    },
    videoView: {
        width: "100%",
        height: "100%",

    },
    videoContainer: {
        width: wp(100),
        height: hp(47),
        marginTop: hp(8),
        borderWidth: 1
    }

})