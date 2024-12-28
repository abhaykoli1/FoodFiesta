import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { categories } from "../Constants/Data";
import { colors } from "../Constants/Colors";
import { ThemeColors } from "../Constants/Theme";

export default function Categories() {
  const [isActive, setIsActive] = React.useState(null);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="overflow-visible"
      contentContainerStyle={{
        paddingHorizontal: 20,
        backgroundColor: ThemeColors.BGcolor,
      }}
    >
      {categories.map((category, index) => {
        return (
          <View key={index} className="flex justify-center items-center mr-6">
            <TouchableOpacity
              onPress={() => setIsActive(category.id)}
              style={[
                { ...styles.card },
                isActive === category.id
                  ? { backgroundColor: colors.Grey1 }
                  : { backgroundColor: colors.Grey7 },
              ]}
            >
              <Image
                style={{ width: 45, height: 45 }}
                source={category.image}
              />
            </TouchableOpacity>
            <Text
              style={[
                {},
                isActive === category.id
                  ? { Color: colors.Grey1, fontWeight: "bold" }
                  : { Color: colors.Grey7 },
              ]}
            >
              {category.name}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 88,
    padding: 8,
  },
});
