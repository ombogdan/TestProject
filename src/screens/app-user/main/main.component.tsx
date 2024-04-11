import React, {useEffect} from "react";

import {FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {firebase} from '@react-native-firebase/remote-config';
import {useTypedDispatch, useTypedSelector} from "store/index";
import {appActions} from "store/slices/app";
import {selectAllSerials, selectLastWatchingData} from "store/selectors/user";
import {GIFT_IMAGE} from "constants/index";
import {AppIcon} from "assets/index";
import {Box} from "ui-kit/box";
import {BannerItem} from "screens/app-user/main/components/banner";
import {SerialItem} from "screens/app-user/main/components/serial-item";
import {navigate} from "shared/navigation/root-navigator.config";
import {AppUserRoutes} from "shared/navigation/app-user";
import {useStyles} from "./main.styles";

const Main = () => {
  const styles = useStyles();
  const dispatch = useTypedDispatch();
  const serialsData = useTypedSelector(selectAllSerials);
  const lastWatchingData = useTypedSelector(selectLastWatchingData);

  const fetchRemoteConfig = async () => {
    const defaultAppRemoteConfig = firebase.remoteConfig();
    defaultAppRemoteConfig.settings.minimumFetchIntervalMillis = 0;
    firebase.remoteConfig().settings.minimumFetchIntervalMillis = 0;

    await defaultAppRemoteConfig.fetchAndActivate();
    const serials = defaultAppRemoteConfig.getValue('serials').asString();
    dispatch(appActions.saveSerials(JSON.parse(serials)));
  };

  useEffect(() => {
    fetchRemoteConfig();
  }, []);

  const handleContinueWatching = () => {
    navigate(AppUserRoutes.VideoPlayer, {
      serial: lastWatchingData.serial,
      episodeIndex: lastWatchingData.episodeIndex,
      episodeTime: lastWatchingData.episodeTime
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.homeText}>Home</Text>
        <Box direction="row" alignItems="center">
          <Image source={GIFT_IMAGE} style={styles.giftImg}/>
          <AppIcon name="search" size={30} style={styles.searchImg}/>
        </Box>
      </View>
      <ScrollView style={styles.renderContainer} showsVerticalScrollIndicator={false}>
        <FlatList
          data={serialsData?.banersList ?? []}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <BannerItem bannerItem={item}/>
          )}
          keyExtractor={item => item.id}
        />
        {(lastWatchingData?.serial?.id ?? false) &&
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
        }
        {(serialsData?.trendingNowList ?? []).length > 0 &&
          <Box pt={28} pb={12}>
            <Text style={styles.trendingNowHeader}>Trending Now</Text>
          </Box>
        }
        <FlatList
          data={serialsData?.trendingNowList ?? []}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <SerialItem bannerItem={item}/>
          )}
          keyExtractor={item => item.id}
        />
        {(serialsData?.topRomanceList ?? []).length > 0 &&
          <Box pt={28} pb={12}>
            <Text style={styles.trendingNowHeader}>Top Romance</Text>
          </Box>
        }
        <FlatList
          data={serialsData?.topRomanceList ?? []}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <SerialItem bannerItem={item}/>
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
