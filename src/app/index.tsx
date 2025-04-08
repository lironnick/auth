import { View, Text } from 'react-native';

import { ButtonLoginSocial } from '@/components/ButtonLoginSocial';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Home</Text>

      <View className="flex-row justify-center items-center gap-5">
        <ButtonLoginSocial icon="google" onPress={() => console.log('google')} />
        <ButtonLoginSocial icon="apple" onPress={() => console.log('apple')} />
        <ButtonLoginSocial icon="salesforce" onPress={() => console.log('salesforce')} />
      </View>
    </View>
  );
}
