import React from "react";

export interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  onPress: () => void;
  containerStyle?: object;
  buttonBoxStyle?: object;
  disabled?: boolean;
  isLoading?: boolean;
  settings?: boolean;
  textStyles?: object;
}
