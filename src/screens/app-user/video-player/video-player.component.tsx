import React, {useEffect, useRef, useState} from "react";

import {ActivityIndicator, Dimensions, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useTypedDispatch} from "store/index";
import Video from "react-native-video";
import {AppIcon} from "assets/index";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import LinearGradient from 'react-native-linear-gradient';
import {HEADER_GRADIENT, HEADER_GRADIENT_REVERSED} from "constants/index";
import {goBack} from "shared/navigation/root-navigator.config";
import PagerView from 'react-native-pager-view';
import {Slider} from '@miblanchard/react-native-slider';
import {Banner} from "shared/types";
import {appActions} from "store/slices/app";
import {useStyles} from "./video-player.styles";

const window = Dimensions.get('window');
const windowHeight = window.height;

type VideoPlayerProps = {
  route: {
    params: {
      serial: Banner,
      episodeIndex: number,
      episodeTime: number,
    }
  }
}
type VideoRefs = Record<number, Video | null>;

const VideoPlayer = ({route}: VideoPlayerProps) => {
  const {serial, episodeIndex, episodeTime} = route?.params ?? {};
  const {episodesList} = serial || {};
  const pagerViewRef = useRef<PagerView>(null);
  const videoRefs = useRef<VideoRefs>({}).current;
  const insets = useSafeAreaInsets();
  const styles = useStyles({insets});
  const dispatch = useTypedDispatch();

  const [viewableItemIndex, setViewableItemIndex] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  const handlePressPause = () => {
    setIsPlaying(!isPlaying);
  }

  const handleGoBack = () => {
    dispatch(appActions.saveLastWatching({serial, episodeIndex: viewableItemIndex, episodeTime: currentVideoTime}));
    goBack();
  }

  const setPage = (page: number) => {
    if (pagerViewRef.current) {
      pagerViewRef.current?.setPage(page);
    }
  };

  useEffect(() => {
    if (episodeIndex !== undefined) {
      setPage(episodeIndex);
      setCurrentVideoTime(0);
    }
  }, [episodeIndex]);

  const handleChangeSlider = (sliderValue: number[]) =>{
    videoRefs[episodeIndex]?.seek(sliderValue[0]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={HEADER_GRADIENT} style={styles.headerContainer}>
        <TouchableOpacity onPress={handleGoBack} style={styles.closeButton}>
          <AppIcon name="close"/>
        </TouchableOpacity>
        <View style={styles.centerContainer}>
          <Text style={styles.centerText}>{episodesList?.[viewableItemIndex]?.name ?? ""}</Text>
        </View>
        <View style={styles.closeButton}/>
      </LinearGradient>
      {!isVideoLoading &&
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large"/>
        </View>
      }
      <PagerView
        style={{ flex: 1 }}
        ref={pagerViewRef}
        orientation="vertical"
        initialPage={episodeIndex}
        onPageSelected={(e) => {
          const newIndex = e.nativeEvent.position;
          setViewableItemIndex(newIndex);
          if(episodeTime) {
            videoRefs[newIndex]?.seek(episodeTime);
          }
          setCurrentVideoTime(0);
        }}>
        {episodesList.map((episode, index) => (
          <View key={episode.id} style={{ height: windowHeight - insets.bottom - insets.top }}>
            <Video
              ref={(ref) => {
                videoRefs[index] = ref;
              }}
              source={{uri: episode.video_url}}
              style={{width: '100%', height: windowHeight - insets.bottom - insets.top}}
              resizeMode="cover"
              repeat
              paused={(index === viewableItemIndex) ? !isPlaying : true}
              onLoad={(meta) => {
                setIsVideoLoading(true);
                setVideoDuration(meta.duration);
              }}
              onProgress={({currentTime}) => {
                if (currentTime !== 0) {
                  setCurrentVideoTime(currentTime)
                }
              }}
              bufferConfig={{
                minBufferMs: 10000,
                maxBufferMs: 60000,
                bufferForPlaybackMs: 5000,
                bufferForPlaybackAfterRebufferMs: 2000,
              }}
            />
            {!isVideoLoading && (
              <View style={{ /* Стилі для вашого індикатора завантаження */ }}>
                <ActivityIndicator size="large" />
              </View>
            )}
          </View>
        ))}
      </PagerView>

      <LinearGradient colors={HEADER_GRADIENT_REVERSED} style={styles.bottomContainer}>
        <TouchableOpacity onPress={handlePressPause} style={styles.closeButton}>
          <AppIcon name={isPlaying ? "pause" : "play"}/>
        </TouchableOpacity>
        <Slider
          minimumValue={0}
          value={currentVideoTime}
          maximumValue={videoDuration}
          thumbStyle={styles.thumbStyle}
          trackStyle={styles.trackStyle}
          minimumTrackTintColor="#FFFFFF"
          onValueChange={handleChangeSlider}
          maximumTrackTintColor="rgba(255,255,255,0.32)"
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default VideoPlayer;
