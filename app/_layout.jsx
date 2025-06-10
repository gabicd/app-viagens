import { NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans"; // Sua fonte
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { View } from 'react-native';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [fontsLoaded, fontError] = useFonts({
    NunitoSans_700Bold,
    // Adicione outras fontes aqui se tiver
  });

  // Função para esconder a splash screen quando as fontes estiverem prontas
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      // Esconde a splash screen APENAS SE AS FONTES CARREGAREM OU SE HOUVER ERRO
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Enquanto as fontes não carregam OU há um erro, retorna null (mantendo a splash screen visível)
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}> {/* Adicionado View e onLayout */}
      <Stack>
        <Stack.Screen name="index" options={{ title: "home", headerShown: false }} />
        <Stack.Screen name="login" options={{ title: "login" }} />
        <Stack.Screen name="signup" options={{ title: "signup" }} />
        <Stack.Screen name="main_screen" options={{ title: "main_screen", headerShown: false }} />
        <Stack.Screen name="novoroteiro" options={{ title: "Novo Roteiro", headerShown: false }} />
      </Stack>
    </View>
  );
}
