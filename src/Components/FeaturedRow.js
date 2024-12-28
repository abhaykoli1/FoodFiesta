import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Featured } from "../Constants/Data";
import { colors } from "../Constants/Colors";
import { ThemeColors } from "../Constants/Theme";
import RestaurantCard from "./RestaurantCard";
export default function FeaturedRow({ Title, restaurants, description }) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          //   alignItems: "center",
          paddingHorizontal: 10,
          marginHorizontal: 20,
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{Title}</Text>
          <Text style={{ fontSize: 14 }}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              color: ThemeColors.Text,
              fontWeight: "bold",
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
        style={{ overflow: "visible", paddingVertical: 10 }}
      >
        {restaurants.map((restaurants, index) => {
          return <RestaurantCard key={index} item={restaurants} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
