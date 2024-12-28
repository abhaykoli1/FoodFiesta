import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Featured } from "../Constants/Data";

export default function Cart() {
  const restautant = Featured.restaurants(0);
  return (
    <View>
      {/* backbtn */}
      <View>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
