import {Image, Pressable, Text, View} from "react-native";
import React from "react";
import {navigate} from "shared/navigation/root-navigator.config";
import {AppUserRoutes} from "shared/navigation/app-user";
import {BannerItemProps} from "./banner.types";
import {useStyles} from "./banner.styles";

const BannerItem = ({bannerItem}: BannerItemProps) => {
  const {photo_url, genre, name, author} = bannerItem;
  const styles = useStyles();

  return (
    <Pressable
      onPress={() => {
        navigate(AppUserRoutes.VideoPlayer, {serial: bannerItem})
      }}
      style={styles.bannerImageContainer}>
      <Image
        source={{uri: photo_url}}
        style={styles.bannerImage}
      />
      <View style={styles.genreContainer}>
        <Text style={styles.genre}>{genre}</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.authorText}>{author}</Text>
      </View>
    </Pressable>
  )
}

export default BannerItem;
