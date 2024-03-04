import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const DetailsPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: `Details of ${id}`,
        }}
      />

      <Text>Details for {id}</Text>
    </View>
  );
};

export default DetailsPage;
