import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>

      <TouchableOpacity>
        <Link href={'/login'}>Login</Link>
      </TouchableOpacity>
    </View>
  );
}
