import { Button, View } from "react-native";
import { useRouter } from 'expo-router'
export default function Index() {
  const router = useRouter()

  return (
    <View >
      <Button title="Teste" onPress={() => {
        router.navigate("/sets")
      }} />
    </View>
  );
}
