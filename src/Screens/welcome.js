import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
// import { useTheme } from "../Constants/ThemeProvider";
import { colors } from "../Constants/Colors";
import { StatusBar } from "expo-status-bar";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
//
export default function Welcome({ navigation }) {
  const sizeHeight = useSharedValue(50);
  const sizeWidth = useSharedValue(50);
  //
  const BackHeight = useSharedValue(50);
  const BackWidth = useSharedValue(50);

  //
  const SizeStyle = useAnimatedStyle(() => {
    return {
      height: sizeHeight.value,
      width: sizeWidth.value,
    };
  });
  const BackStyle = useAnimatedStyle(() => {
    return {
      height: BackHeight.value,
      width: BackWidth.value,
    };
  });

  useEffect(() => {
    sizeHeight.value = withTiming(300, { duration: 500 });
    sizeWidth.value = withTiming(300, { duration: 500 });
  }, []);
  useEffect(() => {
    BackHeight.value = withTiming(responsiveHeight(26.7), { duration: 650 });
    BackWidth.value = withTiming(responsiveHeight(26.7), { duration: 650 });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Dashboard");
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Pressable
      //  onPress={() => navigation.navigate("Login")}
      >
        <Animated.View
          style={[
            {
              borderRadius: 150,
              height: responsiveHeight(6),
              width: responsiveHeight(26.7),
              alignItems: "center",
              justifyContent: "center",
              elevation: 5,
              top: -5,
              backgroundColor: "#1ED65F",
            },
            BackStyle,
          ]}
        >
          <Animated.Image
            style={SizeStyle}
            source={require("../../assets/welLogo.png")}
          ></Animated.Image>
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.BGcolor,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "30%",
  },
});
