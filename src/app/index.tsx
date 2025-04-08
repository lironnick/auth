import { useEffect, useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { GoogleSignin, User, isSuccessResponse } from '@react-native-google-signin/google-signin';

import { ButtonLoginSocial } from '@/components/ButtonLoginSocial';

GoogleSignin.configure({
  iosClientId: '216872660441-uccv3ivauefq23u5at96jbneqk7jm4qt.apps.googleusercontent.com',
});

export default function Home() {
  const [auth, setAuth] = useState<User | null>(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      const currentUser = GoogleSignin.getCurrentUser();
      setAuth(currentUser);
    };

    getCurrentUser();
  }, []);

  async function handleGoogleSignIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();

      if (isSuccessResponse(response)) {
        console.log(response.data);
        setAuth(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await GoogleSignin.signOut();
      setAuth(null);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View className="flex-1 items-center justify-center">
      {auth && (
        <View className="flex-1 items-center justify-center gap-3">
          <Image source={{ uri: auth.user.photo }} className="w-24 h-24 rounded-lg" />
          <Text>{auth.user.name}</Text>
          <Text>{auth.user.email}</Text>

          <Button title="Logout" onPress={handleSignOut} />
        </View>
      )}

      {!auth && (
        <View className="flex-row justify-center items-center gap-5">
          <ButtonLoginSocial icon="google" onPress={handleGoogleSignIn} />
          <ButtonLoginSocial icon="apple" onPress={() => console.log('apple')} />
          <ButtonLoginSocial icon="salesforce" onPress={() => console.log('salesforce')} />
        </View>
      )}
    </View>
  );
}
