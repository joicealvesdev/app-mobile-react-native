import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Add() {
  const router = useRouter();
  const [link, setLink] = useState("");

  function handleSave() {
    console.log("Link salvo:", link);
    router.back();
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Cole o link aqui"
        value={link}
        onChangeText={setLink}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 8,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={handleSave}
        style={{
          backgroundColor: "#22c55e",
          padding: 15,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          Salvar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
