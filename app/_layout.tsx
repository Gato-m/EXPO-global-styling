import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    // <Stack>
    //   <Stack.Screen name="index" options={{ title: 'Home' }} />
    //   <Stack.Screen name="contacts" options={{ title: 'Contacts' }} />
    //   <Stack.Screen name="statistic" options={{ title: 'Statistic' }} />
    //   <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
    // </Stack>

    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
