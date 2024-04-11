import {Image, Platform, Pressable, Text, View} from "react-native";
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
    <View>
      <Pressable
        style={styles.bannerImageContainer}
        onPress={() => {
          if (!close) {
            navigate(AppUserRoutes.VideoPlayer, {serial: bannerItem});
          }
        }}>
        <Image
          source={{uri: photo_url}}
          style={styles.bannerImage}
        />
        {close &&
          <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={8}
            reducedTransparencyFallbackColor="white">
            {Platform.OS === 'android' ?
              <View style={styles.closedContainer}>
                <View style={styles.overwlow}>
                  <BlurView
                    style={styles.absoluteWhite}
                    blurType="light"
                    blurAmount={15}
                    reducedTransparencyFallbackColor="white"/>
                  <AppIcon name="lock" size={24}/>
                </View>
              </View>
              :
              <View style={styles.closedContainer}>
                <BlurView
                  style={styles.absoluteWhite}
                  blurType="light"
                  blurAmount={5}
                  reducedTransparencyFallbackColor="white"/>
                <AppIcon name="lock"/>
              </View>
            }
          </BlurView>
        }
      </Pressable>
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
