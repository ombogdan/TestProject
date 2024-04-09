import React, {useEffect} from "react";

import {FlatList, Image, SafeAreaView, Text, View} from "react-native";
import {firebase} from '@react-native-firebase/remote-config';
import {useTypedDispatch, useTypedSelector} from "store/index";
import {appActions} from "store/slices/app";
import {selectAllSerials} from "store/selectors/user";
import {GIFT_IMAGE} from "constants/index";
import {AppIcon} from "assets/index";
import {Box} from "ui-kit/box";
import {BannerItem} from "screens/app-user/main/components/banner";
import {useStyles} from "./main.styles";

const Main = () => {
  const styles = useStyles();
  const dispatch = useTypedDispatch();
  const serialsData = useTypedSelector(selectAllSerials);

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.homeText}>Home</Text>
        <Box direction="row" alignItems="center">
          <Image source={GIFT_IMAGE} style={styles.giftImg}/>
          <AppIcon name="search" size={30} style={styles.searchImg}/>
        </Box>
      </View>
      <View style={styles.renderContainer}>
        <FlatList
          data={serialsData?.banersList ?? []}
          horizontal
          renderItem={({item}) => (
            <BannerItem bannerItem={item}/>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Main;
