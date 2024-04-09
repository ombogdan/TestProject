import {Image, Text, View} from "react-native";
import React from "react";
import {BlurView} from "@react-native-community/blur";
import {AppIcon} from "assets/index";
import {BannerItemProps} from "./serial-item.types";
import {useStyles} from "./serial-item.styles";

const SerialItem = ({bannerItem}: BannerItemProps) => {
  const {photo_url, close, name, release_date} = bannerItem;
  const styles = useStyles();

  return (
    <View style={styles.bannerImageContainer}>
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
    </View>
  )
}

export default SerialItem;
