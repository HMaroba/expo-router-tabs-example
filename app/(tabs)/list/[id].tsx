import { Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const DetailsPage = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: "Details of ",
        }}
      />
    </View>
  );
};
