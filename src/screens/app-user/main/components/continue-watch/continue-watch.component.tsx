import {Image, Pressable, Text} from "react-native";
import React from "react";
import {navigate} from "shared/navigation/root-navigator.config";
import {AppUserRoutes} from "shared/navigation/app-user";
import {Box} from "ui-kit/box";
import {AppIcon} from "assets/index";
import {BannerItemProps} from "./continue-watch.types";
import {useStyles} from "./continue-watch.styles";

const ContinueWatchComponent = ({lastWatchingData}: BannerItemProps) => {
  const styles = useStyles();

  const handleContinueWatching = () => {
    navigate(AppUserRoutes.VideoPlayer, {
      serial: lastWatchingData.serial,
      episodeIndex: lastWatchingData.episodeIndex,
      episodeTime: lastWatchingData.episodeTime
    });
  }

  return (
    <Box pt={40}>
      <Text style={styles.continueWatching}>Continue Watching</Text>
      <Pressable onPress={handleContinueWatching} style={styles.continueWatchingContainer}>
        <Box direction="row">
          <Image
            source={{uri: lastWatchingData.serial.photo_url}}
            style={styles.continueWatchingImg}/>
          <Box direction="column" ml={12} justifyContent="center">
            <Text style={styles.serialName}>{lastWatchingData.serial.name}</Text>
            <Text style={styles.authorName}>{lastWatchingData.serial.author}</Text>
          </Box>
        </Box>
        <AppIcon name="rightArrow"/>
      </Pressable>
    </Box>
  )
}

export default ContinueWatchComponent;
