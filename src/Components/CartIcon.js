import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ThemeColors } from "../Constants/Theme";
import { useNavigation } from "@react-navigation/native";

export default function CartIcon() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 50,
        bottom: 10,
        width: "100%",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{
          borderRadius: 30,
          backgroundColor: ThemeColors.bgcolor(1),
          marginHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 5,
        }}
      >
        <View
          style={{
            backgroundColor: "white",

            height: 30,
            width: 30,
            margin: 10,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 17 }}>3</Text>
        </View>
        <View
          style={{
            height: 30,
            width: 30,
            flex: 1,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            View Cart
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
