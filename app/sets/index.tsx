import SetCard from "@/components/SetCard";
import { useSets } from "@/Providers/SetsProvider";
import { Text, View } from "react-native";

export default function Index() {
  const setList = useSets().get();
  return (
    <View>
      <Text>Tela de sets</Text>
      {setList.length === 0 ? (
        <Text>Lista vazia</Text>
      ) : (
        <View>
          {setList.map((i) => (
            <SetCard key={Math.random()} name={i} />
          ))}
        </View>
      )}
    </View>
  );
}
