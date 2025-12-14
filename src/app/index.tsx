import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [links] = useState([
    { id: "1", url: "https://rocketseat.com.br" },
    { id: "2", url: "https://expo.dev" },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: "#0f172a", padding: 20 }}>
      
      <Image
        source={require("../../assets/images/splash.png")}
        style={{
          width: 500,
          height: 500,
          alignSelf: "center",
          marginBottom: -95,
        }} 
        resizeMode="contain"
      />

      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#1e293b", 
              padding: 15,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "#e5e7eb" }}>{item.url}</Text>
          </View>
        )}
      />

      <Link
        href="/add"
        style={{
          backgroundColor: "#7c3aed",
          padding: 18,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>
          Adicionar Link
        </Text>
      </Link>
    </View>
  );
}
