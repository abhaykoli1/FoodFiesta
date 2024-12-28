import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ThemeColors } from "../Constants/Theme";
import { useNavigation } from "@react-navigation/native";
export default function RestaurantCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...item })}
    >
      <View
        style={{
          shadowColor: ThemeColors.bgcolor(0.2),
          shadowRadius: 7,
        }}
        className="mr-6 , bg-white rounded-3xl shadow-lg"
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={item.Image} />
        <View className="px-3 , pb-4 , space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-xs">
              <Text className="text-green-700">*</Text>{" "}
              <Text className="text-gray-700">
                ({item.reviews} review) .{" "}
                <Text className="font-semibold">{item.category}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Feather name="map-pin" />
            <Text className="text-xs">Nearby. {item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
