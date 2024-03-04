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
      <Text style={{ padding: 10, fontSize: 18 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet
        semper neque, ut fermentum massa lobortis eget. Quisque euismod libero
        eu odio feugiat, vel venenatis justo scelerisque. Sed sagittis felis ac
        tortor tristique, vitae volutpat orci luctus. Nullam eget velit a nulla
        lacinia cursus sit amet id justo. Vivamus interdum justo in nisl
        tincidunt, at rhoncus nunc volutpat. Phasellus euismod mauris vel dolor
        condimentum, vel bibendum mauris facilisis. Integer ac quam eu lectus
        gravida ullamcorper sed et libero. Aenean posuere lacus a felis
        tincidunt, a venenatis metus hendrerit. Proin ut felis nec sapien
        condimentum aliquam eget eget odio.
      </Text>
    </View>
  );
}
