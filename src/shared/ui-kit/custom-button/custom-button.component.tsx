import React from "react";
import { View, Pressable, Text } from "react-native";
import { ButtonProps } from "shared/ui-kit/custom-button/custom-button.types";
import { useStyles } from "./custom-button.styles";

const CustomButton = ({
                        title,
                        icon,
                        onPress,
                        containerStyle,
                        buttonBoxStyle,
                        disabled = false,
                        isLoading = false,
                        settings,
                        textStyles
                      }: ButtonProps) => {
  const styles = useStyles();

  const onButtonPress = () => {
    if (!disabled) {
      onPress();
    }
  };

  return (
    <View style={[styles.buttonContainer, containerStyle]}>
      <Pressable
        onPress={onButtonPress}
        style={[styles.buttonBox, buttonBoxStyle]}
        disabled={disabled || isLoading}>
        {!settings ?
          <View>
            {icon &&
              <View>
                {icon}
              </View>
            }
            {isLoading ?
              <View>
              {/* <Lottie */}
              {/*  loop */}
              {/*  autoPlay */}
              {/*  resizeMode="contain" */}
              {/*  style={styles.lottieAnim} */}
              {/*  source={WHITE_LOADER_LOTTIE} */}
              {/* /> */}
              </View>
              :
              <Text style={[styles.btnText, textStyles]}>{title}</Text>
            }
          </View>
          :
          <View style={styles.mainContainer}>
            {isLoading ?
              <View>
              {/* <Lottie */}
              {/*  loop */}
              {/*  autoPlay */}
              {/*  resizeMode="contain" */}
              {/*  style={styles.lottieAnim} */}
              {/*  source={BLACK_LOADER_LOTTIE} */}
              {/* /> */}
              </View>
              :
              <Text style={[styles.btnTextBlack, textStyles]}>{title}</Text>
            }
            {/* <Image source={RIGHT_ARROW_ICON} style={styles.rightArrowIcon} resizeMode="contain" /> */}
          </View>
        }
      </Pressable>
    </View>
  );
};

export default CustomButton;
