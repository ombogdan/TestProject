import React, {useEffect, useRef, useState} from "react";

import {ActivityIndicator, Dimensions, Platform, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useTypedDispatch} from "store/index";
import Video from "react-native-video";
import {AppIcon} from "assets/index";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import LinearGradient from 'react-native-linear-gradient';
import {HEADER_GRADIENT, HEADER_GRADIENT_REVERSED} from "constants/index";
import {goBack} from "shared/navigation/root-navigator.config";
import {SwiperFlatList} from 'react-native-swiper-flatlist';
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
  const swiperRef = useRef(null);
  const videoRefs = useRef<VideoRefs>({}).current;
  const insets = useSafeAreaInsets();
  const styles = useStyles({insets});
  const dispatch = useTypedDispatch();

  const [viewableItemIndex, setViewableItemIndex] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [isVideoScrolling, setIsVideoScrolling] = useState(false);
  const [userInitiatedScroll, setUserInitiatedScroll] = useState(false);

  const handlePressPause = () => {
    setIsPlaying(!isPlaying);
  }

  const handleGoBack = () => {
    dispatch(appActions.saveLastWatching({serial, episodeIndex: viewableItemIndex, episodeTime: currentVideoTime}));
    goBack();
  }

  useEffect(() => {
    if (episodeIndex && !isVideoLoading && !userInitiatedScroll) {
      swiperRef.current?.scrollToIndex({
        index: episodeIndex,
        animated: true,
      });
      if (userInitiatedScroll) {
        setUserInitiatedScroll(false);
      }
    }

  }, [episodeTime, episodeIndex, isVideoLoading, isVideoScrolling, userInitiatedScroll]);


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
      <SwiperFlatList
        ref={swiperRef}
        vertical
        keyExtractor={(item, index) => index.toString()}
        showPagination={false}
        data={episodesList}
        style={{height: windowHeight - insets.bottom - insets.top}}
        viewabilityConfig={{itemVisiblePercentThreshold: 60}}
        onViewableItemsChanged={({viewableItems, changed}) => {
          if (viewableItems.length > 0) {
            const firstVisibleIndex = viewableItems[0]?.index ?? 0;
            setViewableItemIndex(firstVisibleIndex);
            videoRefs[firstVisibleIndex]?.seek(0);
            setIsVideoLoading(false);
            setCurrentVideoTime(0);
            if (changed.length > 0 && isVideoScrolling && episodeIndex === changed[0].index) {
              setUserInitiatedScroll(true);
            }
          }
        }}
        renderItem={({item, index}) => (
          <View style={{height: windowHeight - insets.bottom - insets.top}} key={item}>
            <Video
              ref={(ref) => {
                videoRefs[index] = ref;
              }}
              source={{uri: item.video_url}}
              style={{width: '100%', height: windowHeight - insets.bottom - insets.top}}
              resizeMode="cover"
              repeat
              paused={(index === viewableItemIndex) ? !isPlaying : true}
              onLoad={(meta) => {
                setIsVideoLoading(true);
                setVideoDuration(meta.duration);
                if ((episodeIndex && !userInitiatedScroll) || index === episodeIndex) {
                  swiperRef.current?.scrollToIndex({
                    index: episodeIndex,
                    animated: true,
                    viewOffset: Platform.OS === 'ios' ? episodeIndex * (insets.bottom + insets.top) : 0
                  });
                  setIsVideoScrolling(true);
                }
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
          </View>
        )}
      />

      <LinearGradient colors={HEADER_GRADIENT_REVERSED} style={styles.bottomContainer}>
        <TouchableOpacity onPress={handlePressPause} style={styles.closeButton}>
          <AppIcon name={isPlaying ? "pause" : "play"}/>
        </TouchableOpacity>
        <Slider
          thumbStyle={styles.thumbStyle}
          trackStyle={styles.trackStyle}
          minimumValue={0}
          maximumValue={videoDuration}
          value={currentVideoTime}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="rgba(255,255,255,0.32)"
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default VideoPlayer;
