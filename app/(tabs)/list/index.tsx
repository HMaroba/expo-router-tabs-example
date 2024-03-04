import { Redirect } from "expo-router";
import React from "react";
// import { Text, View } from "react-native";

// export default function Home() {
//   return (
//     <View>
//       <Text>Hello Index</Text>
//     </View>
//   );
// }

const StartPage = () => {
  return <Redirect href={"/home"} />;
};

export default StartPage;
