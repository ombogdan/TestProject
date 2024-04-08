import React from "react";

import { Text, View } from "react-native";
import { useStyles } from "./main.styles";

const Main = () => {
  const styles = useStyles();


  return (
    <View style={styles.container}>
      <Text>qwertyu</Text>
    </View>
  );
};

export default Main;
