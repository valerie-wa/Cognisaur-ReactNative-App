import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#688C27FF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        contentStyle: {
          paddingHorizontal: 10,
          paddingTop: 10,
          backgroundColor: '#688C27FF',
        },
      }}
    >
      <Stack.Screen
        name="Cognisaur"
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Account"
        options={{ title: 'Account' }}
      />
      <Stack.Screen
        name="Leaderboard"
        options={{ title: 'Leaderboard' }}
      />
    </Stack>
  );
}