import { Tabs } from "expo-router";
import React from "react";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="home " />
      <Tabs.Screen name="list " />
    </Tabs>
  );
};
