import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';

export default function ReportarSituacion() {
  const [passA, onChangePassA] = React.useState();
  const [passN, onChangePassN] = React.useState();
  const [token, onChangeToken] = React.useState();

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        onChangeToken(result);
    } else {
      alert('No ha iniciado sesión.');
    }
  }


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  function enviar()
  {
    getValueFor("token").then(() =>
    {
      let data = new FormData();
      data.append("token", token);
      data.append("clave_anterior", passA);
      data.append("clave_nueva", passN);
      fetch("https://adamix.net/defensa_civil/def/cambiar_clave.php", {
          method: 'POST',
          body: data,
        })
        .then(response => response.json())
        .then(response  => {
          alert(response.mensaje);
        })
        .catch(function(e) {
          alert(e);
        });
    });
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Cambiar Contraseña</Text>
      <View>
        <Text style={styles.texto}>Contraseña Actual: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassA}
          value={passA}
          placeholder="Contraseña Actual"
          secureTextEntry={true}
        />
      </View>
      <View>
        <Text style={styles.texto}>Nueva Contraseña: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassN}
          value={passN}
          placeholder="Nueva Contraseña"
          secureTextEntry={true}
        />
      </View>
      <Pressable
        onPress={enviar}
        style={styles.button}>
        <Text style={styles.textobtn}>Enviar</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    marginTop: 20,
    color: '#493d8a',
    textAlign: 'center',
  },
  texto: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'justify',
    marginHorizontal: 20,
    marginTop: 10,
  },
  input: {
    width: 350,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    padding: 10,
  },
  button: {
    width: 250,
    alignSelf: 'center',
    textAlign: 'center',
    alignContent: 'center',
    backgroundColor: "#113ADE",
    borderRadius: 10,
    height: 50,
    marginTop: 20,
    marginBottom: 50
  },
  textobtn: {
    color: "#fff",
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputmulti: {
    width: 350,
    height: 150,
    margin: 12,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    padding: 10,
    textAlignVertical: 'top',
  }
});