import React from "react";
import { View } from "react-native";
import { CustomHeaderProps } from "components/header/header.types";
import { useStyles } from "./header.styles";

const Header = ({ onResetChat, isLoading }: CustomHeaderProps) => {
  const styles = useStyles();


  return (
    <View style={styles.container}>

    </View>
  );
};


export default Header;
