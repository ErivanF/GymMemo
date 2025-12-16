import { Text, View } from "react-native";

interface cardProps {
  name: string;
}
export default function SetCard({ name }: cardProps) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
