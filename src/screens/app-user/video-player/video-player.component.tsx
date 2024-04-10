import React, {useEffect, useRef, useState} from "react";

import {Dimensions, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useTypedDispatch, useTypedSelector} from "store/index";
import {selectAllSerials} from "store/selectors/user";
import Video from "react-native-video";
import {AppIcon} from "assets/index";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import LinearGradient from 'react-native-linear-gradient';
import {HEADER_GRADIENT, HEADER_GRADIENT_REVERSED} from "constants/index";
import {goBack} from "shared/navigation/root-navigator.config";
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Slider from '@react-native-community/slider';
import {Banner} from "shared/types";
import {useStyles} from "./video-player.styles";

const window = Dimensions.get('window');
const windowHeight = window.height;

type VideoPlayerProps = {
  route: {
    params: {
      serial: Banner
    }
  }
}
type VideoRefs = Record<number, Video | null>;

const VideoPlayer = ({route}: VideoPlayerProps) => {
  const {serial} = route?.params ?? {};
  const {episodesList} = serial || {};

  const videoRefs = useRef<VideoRefs>({}).current;
  const insets = useSafeAreaInsets();
  const styles = useStyles({insets});
  const dispatch = useTypedDispatch();
  const serialsData = useTypedSelector(selectAllSerials);

  const [viewableItemIndex, setViewableItemIndex] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePressPause = () => {
    setIsPlaying(!isPlaying);
  }

  const handleSlidingComplete = (newTime: number) => {
    // setCurrentVideoTime(newTime);
    // const currentVideoRef = videoRefs[viewableItemIndex];
    // if (currentVideoRef) {
    //   currentVideoRef.seek(newTime);
    // }
  };

  const handleGoBack = () => {
    goBack();
  }

  useEffect(() => {


  }, [viewableItemIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={HEADER_GRADIENT} style={styles.headerContainer}>
        <TouchableOpacity onPress={handleGoBack} style={styles.closeButton}>
          <AppIcon name="close"/>
        </TouchableOpacity>
        <View style={styles.centerContainer}>
          <Text style={styles.centerText}>{episodesList?.[viewableItemIndex].name ?? ""}</Text>
        </View>
        <View style={styles.closeButton}/>
      </LinearGradient>
      <SwiperFlatList
        vertical
        keyExtractor={(item, index) => index.toString()}
        showPagination={false}
        data={episodesList}
        viewabilityConfig={{itemVisiblePercentThreshold: 40}}
        onViewableItemsChanged={({viewableItems}) => {
          if (viewableItems.length > 0) {
            const firstVisibleIndex = viewableItems[0]?.index ?? 0;
            // @ts-ignore
            setViewableItemIndex(firstVisibleIndex);
            videoRefs[firstVisibleIndex]?.seek(0);
          }
        }}
        renderItem={({item, index}) => (
          <View style={{height: windowHeight - insets.bottom - insets.top}} key={item}>
            <Video
              ref={(ref) => {
                videoRefs[index] = ref;
              }}
              source={{uri: item.video_url}}
              style={{width: '100%', height: windowHeight}}
              resizeMode="cover"
              repeat
              paused={(index === viewableItemIndex) ? !isPlaying : true}
              onLoad={(meta) => setVideoDuration(meta.duration)}
              onProgress={({currentTime}) => setCurrentVideoTime(currentTime)}
              bufferConfig={{
                minBufferMs: 15000,
                maxBufferMs: 50000,
                bufferForPlaybackMs: 25000,
                bufferForPlaybackAfterRebufferMs: 5000,
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
          style={styles.slider}
          minimumValue={0}
          value={currentVideoTime}
          onSlidingComplete={handleSlidingComplete}
          thumbImage={require("shared/assets/png/circle.png")}
          maximumValue={videoDuration}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="rgba(255,255,255,0.32)"
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default VideoPlayer;
