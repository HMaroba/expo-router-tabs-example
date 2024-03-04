import React from "react";
import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: "Home",
        }}
      />
      <Text style={{ fontSize: 20 }}>Welcome to REACT NATIVE</Text>
      <Link
        href={"/details"}
        style={{ fontSize: 18, marginTop: 10, color: "blue" }}
      >
        Go to Details
      </Link>
    </View>
  );
}
