import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';

export default function ReportarSituacion() {
  const [titulo, onChangeTitulo] = React.useState();
  const [descripcion, onChangeDescripcion] = React.useState();
  const [latitud, onChangeLatitud] = React.useState();
  const [longitud, onChangeLongitud] = React.useState();
  const [token, onChangeToken] = React.useState();
  const [image, setImage] = React.useState(null);

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    // console.log(result);
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
      data.append("titulo", titulo);
      data.append("descripcion", descripcion);
      data.append("foto", image);
      data.append("latitud", latitud);
      data.append("longitud", longitud);
      data.append("token", token);
      fetch("https://adamix.net/defensa_civil/def/nueva_situacion.php", {
          method: 'POST',
          body: data,
        })
        .then(response => response.json())
        .then(response  => {
          console.log(response);
          if(response.exito)
          {
            alert(response.mensaje);
          }
        })
        .catch(function(e) {
          alert(e);
        });
    });
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Reportar Situación</Text>
      <View>
        <Text style={styles.texto}>Título: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTitulo}
          value={titulo}
          placeholder="Título"
        />
      </View>
      <View>
        <Text style={styles.texto}>Descripción: </Text>
        <TextInput
          style={styles.inputmulti}
          onChangeText={onChangeDescripcion}
          value={descripcion}
          placeholder="Descripción"
          multiline
        />
      </View>
      <View>
        <Text style={styles.texto}>Latitud: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeLatitud}
          value={latitud}
          placeholder="Latitud"
          keyboardType='numeric'
        />
      </View>
      <View>
        <Text style={styles.texto}>Longitud: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeLongitud}
          value={longitud}
          placeholder="Longitud"
          keyboardType='numeric'
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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
