import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { Styled } from "../Constants/Style";
import { colors } from "../Constants/Colors";
import { Icon } from "react-native-elements";
import { Feather, Ionicons } from "@expo/vector-icons";
import { ThemeColors } from "../Constants/Theme";
import { ScrollView } from "react-native";
import Categories from "../Components/Categories";
import FeaturedRow from "../Components/FeaturedRow";
import { Featured } from "../Constants/Data";
export default function Dashboard() {
  return (
    <View
      style={{ flex: 1, paddingTop: 50, backgroundColor: ThemeColors.BGcolor }}
    >
      <StatusBar style="auto" hidden={false} />

      {/* main */}
      <ScrollView
        stickyHeaderIndices={[1]}
        // stickyHeaderHiddenOnScroll={[0]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
          // backgroundColor: "red",
        }}
      >
        <View style={Styled.HeaderCon}>
          <View style={[Styled.SearchContainer, { flex: 1 }]}>
            <Ionicons name="search" size={30} color={"gray"} />
            <TextInput placeholder="Restaurants" className="ml-2 flex-1 " />
            <View style={styles.Address}>
              <Feather
                name="navigation"
                size={20}
                color={colors.Grey1}
                style={{ paddingHorizontal: 10, borderLeftWidth: 1 }}
              />
              <Text>New York, NYC</Text>
            </View>
          </View>
          <View style={styles.SlidersCon}>
            <Feather name="sliders" size={23} color={colors.white} />
          </View>
        </View>
        {/* Catagories */}
        <Categories />

        {/* featured  */}
        <View className="mt-5">
          {[Featured, Featured, Featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                Title={item.Title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
  },
  Address: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  SlidersCon: {
    backgroundColor: ThemeColors.bgcolor(1),
    borderRadius: 99,
    height: 47,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
});
