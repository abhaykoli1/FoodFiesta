import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemeColors } from "../Constants/Theme";
import { Feather } from "@expo/vector-icons";

export default function DishRow({ item }) {
  return (
    <View
      style={{
        padding: 10,
        marginBottom: 10,
        backgroundColor: "white",
        borderRadius: 20,
        elevation: 3,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        style={{ height: 100, width: 100, borderRadius: 20 }}
        source={item.image}
      />
      <View style={{ flex: 1 }}>
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{ fontSize: 14 }}>{item.description}</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingTop: 10,
            flexDirection: "row",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            rs {item.price}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={{
                backgroundColor: ThemeColors.bgcolor(1),
                height: 30,
                width: 30,
                borderRadius: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="minus" color={"white"} size={20} />
            </Pressable>
            <Text
              style={{
                paddingHorizontal: 10,
                alignSelf: "center",
              }}
            >
              2
            </Text>
            <Pressable
              style={{
                backgroundColor: ThemeColors.bgcolor(1),
                height: 30,
                width: 30,
                borderRadius: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="plus" color={"white"} size={20} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
