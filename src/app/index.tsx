import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

type Link = {
  id: string;
  url: string;
};

export default function Index() {
  const [links, setLinks] = useState<Link[]>([
    { id: "1", url: "https://rocketseat.com.br" },
    { id: "2", url: "https://expo.dev" },
  ]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image
        source={require("../../assets/images/splash.png")}
        style={{ width: 120, height: 120, alignSelf: "center", marginBottom: 20 }}
        resizeMode="contain"
      />

      <FlatList<Link>
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ marginBottom: 10 }}>{item.url}</Text>
        )}
      />

      <TouchableOpacity
        onPress={() => router.push("/add")}
        style={{
          backgroundColor: "#7c3aed",
          padding: 15,
          borderRadius: 8,
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          Adicionar Link
        </Text>
      </TouchableOpacity>
    </View>
  );
}
