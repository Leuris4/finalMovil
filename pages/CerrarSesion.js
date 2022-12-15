import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import App from '../App';

export default function CerrarSesion({ navigation, route }) {
    const { handleReaload } = route.params;
  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        SecureStore.deleteItemAsync(key)
        .then(() => {
            handleReaload(false);
        })
        .catch((e) => console.log(e));
        SecureStore.deleteItemAsync('info');
        navigation.navigate("Inicio");
    } else {
      alert('No se ha podido cerrar sesión.');
    }
  }
  
  function LogOut()
  {
    getValueFor("token");
  }

  React.useEffect(() => {
    LogOut();
    }, []);

  return (
    <View style={styles.container}>
      <Text>Cerrando Sesión</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
