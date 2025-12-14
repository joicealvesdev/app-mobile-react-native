import { Stack } from "expo-router";
      
export default function Layout() {      
  return (  
    <Stack>   
      <Stack.Screen name="index" options={{ title: "Meus Links" }} />
      <Stack.Screen name="add" options={{ title: "Adicionar Link" }} /> 
    </Stack>
  );
}   
