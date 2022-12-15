import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function Login({ navigation, route }) {
  const [cedula, onChangeCedula] = React.useState();
  const [clave, onChangeClave] = React.useState();
  const { handleReaload } = route.params;

  async function saveToken(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      handleReaload(true)
      navigation.navigate("Noticias");
    } else {
      alert('No se ha podido guardar el token.');
    }
  }

  function enviar()
  {
    let data = new FormData();
    data.append("cedula", cedula);
    data.append("clave", clave);
    fetch("https://adamix.net/defensa_civil/def/iniciar_sesion.php", {
        method: 'POST',
        body: data,
      })
      .then(response => response.json())
      .then(response  => {
        let result = response.datos;
        if(response.exito)
        {
          let info = {
            nombre: result.nombre,
            apellido: result.apellido,
            correo: result.correo,
            id: result.id,
            telefono: result.telefono
          };
          saveToken("token", result.token)
          .then(result =>
            {
              saveToken("info", JSON.stringify(info))
              .then(r =>
                {
                  getValueFor("token");
                })
                .catch(e =>
                  {
                    console.log("Error:" + e);
                  });
            })
            .catch(e =>
              {
                console.log("Error:" + e);
              });
          // alert(response.mensaje);
        }else{
          alert(response.mensaje);
        }
      })
      .catch(function(e) {
        alert(e);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Iniciar Sesión</Text>
      <View>
        <Text style={styles.texto}>{"Cédula: (Sin guiones)"} </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeCedula}
          value={cedula}
          placeholder="Cédula"
        />
      </View>
      <View>
        <Text style={styles.texto}>Clave: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeClave}
          value={clave}
          placeholder="Clave"
          secureTextEntry={true}
        />
      </View>
      <Pressable
        onPress={enviar}
        style={styles.button}>
        <Text style={styles.textobtn}>Enviar</Text>
      </Pressable>
    </View>
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
  },
  textobtn: {
    color: "#fff",
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  }
});
