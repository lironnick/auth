import { Link, Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 justify-center items-center p-5">
        <Text className="text-xl">Esta tela não existe.</Text>
        <Link href="/" className="mt-4 px-4">
          <Text className="text-lg font-bold">Ir para a tela inicial!</Text>
        </Link>
      </View>
    </>
  );
}
