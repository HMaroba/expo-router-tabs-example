import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function List() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Link href={"/list/1"}>New 1</Link>
      <Link href={"/list/2"}>New 2</Link>
      <Link href={"/list/3"}>New 3</Link>
      <Link href={"/list/4"}>New 4</Link>
    </View>
  );
}
