import { View, Text } from "react-native";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";

export default function Details() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: "Details Page",
        }}
      />
      <Text
        onPress={() => {
          router.setParams({ name: "Updated" });
        }}
      >
        Update the title
      </Text>

      <Link
        href={"/dashboard"}
        style={{ fontSize: 18, marginTop: 10, color: "blue" }}
      >
        Go to Dashboard
      </Link>
    </View>
  );
}
