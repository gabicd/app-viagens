import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{title: "home", headerShown: false}} />
    <Stack.Screen name="login" options={{title: "login"}} />
    </Stack>;
}
