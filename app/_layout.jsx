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

  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {

      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "home", headerShown: false }} />
        <Stack.Screen name="login" options={{ title: "login", headerShown: false }} />
        <Stack.Screen name="signup" options={{ title: "signup", headerShown: false }} />
        <Stack.Screen name="main_screen" options={{ title: "main_screen", headerShown: false }} />
        <Stack.Screen name="novoroteiro" options={{ title: "Novo Roteiro", headerShown: false }} />
      </Stack>
    </View>
  );
}
