import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { ThemeColors } from "../Constants/Theme";
import DishRow from "../Components/DishRow";
import CartIcon from "../Components/CartIcon";
import { StatusBar } from "expo-status-bar";

export default function Restaurant() {
  const { params } = useRoute();
  let item = params;
  const navigation = useNavigation();
  //   console.log("restautant", item);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <CartIcon />

      {/* top */}
      <View style={{ flex: 0.3, position: "relative" }}>
        <Image source={item.Image} style={{ width: 430, height: 300 }} />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            top: 35,
            left: 10,
            borderRadius: 99,
            backgroundColor: "white",
            height: 35,
            width: 35,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name="arrow-left" size={25} color={ThemeColors.bgcolor(1)} />
        </TouchableOpacity>
      </View>
      {/* top */}

      <View
        style={{
          flex: 0.7,
          zIndex: 3,
        }}
      >
        <View
          style={{
            flex: 1,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: "white",
            paddingTop: 25,
            paddingHorizontal: 15,
          }}
        >
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {item.name}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
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
            <Text>{item.description}</Text>
          </View>

          <ScrollView>
            <View style={{ padding: 20, backgroundColor: "white" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Menu</Text>
              {item.dishes.map((dish, index) => (
                <DishRow item={{ ...dish }} key={index} />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
