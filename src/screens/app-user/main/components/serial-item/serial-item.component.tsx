import {Image, Pressable, Text, View} from "react-native";
import React from "react";
import {BlurView} from "@react-native-community/blur";
import {AppIcon} from "assets/index";
import {navigate} from "shared/navigation/root-navigator.config";
import {AppUserRoutes} from "shared/navigation/app-user";
import {BannerItemProps} from "./serial-item.types";
import {useStyles} from "./serial-item.styles";

const SerialItem = ({bannerItem}: BannerItemProps) => {
  const {photo_url, close, name, release_date} = bannerItem;
  const styles = useStyles();

  return (
    <Pressable
      style={styles.bannerImageContainer}
      onPress={() => {
        navigate(AppUserRoutes.VideoPlayer, {serial: bannerItem});
      }}>
      <Image
        source={{uri: photo_url}}
        style={styles.bannerImage}
      />
      {close &&
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={13}
          reducedTransparencyFallbackColor="white">
          <View style={styles.closedContainer}>
            <BlurView
              style={styles.absoluteWhite}
              blurType="light"
              blurAmount={5}
              reducedTransparencyFallbackColor="white"/>
            <AppIcon name="lock"/>
          </View>
        </BlurView>
      }
      <View style={styles.nameContainer}>
        {release_date &&
          <Text style={styles.releaseText}>Coming {release_date}</Text>
        }
        <Text style={styles.nameText}>{name}</Text>
      </View>
    </Pressable>
  )
}

export default SerialItem;
