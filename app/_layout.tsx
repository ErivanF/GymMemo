import { Stack } from "expo-router";
import "../global.css";
import ListProvider from "@/Providers/ListProvider";
import SetsProvider from "@/Providers/SetsProvider";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <SetsProvider>
      <ListProvider>
        <View className="bg-black h-screen">
          <Stack />
        </View>
      </ListProvider>
    </SetsProvider>
  );
}
