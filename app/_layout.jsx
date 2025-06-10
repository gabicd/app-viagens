import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{title: "home", headerShown: false}} />
    <Stack.Screen name="login" options={{title: "login"}} />
    <Stack.Screen name="signup" options={{title: "signup"}} />
    <Stack.Screen name="main_screen" options={{title: "main_screen", headerShown: false}} />
    </Stack>;
}
