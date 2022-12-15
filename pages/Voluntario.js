import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function Voluntario() {
  const [cedula, onChangeCedula] = React.useState();
  const [nombre, onChangeNombre] = React.useState();
  const [apellido, onChangeApellido] = React.useState();
  const [clave, onChangeClave] = React.useState();
  const [correo, onChangeCorreo] = React.useState();
  const [telefono, onChangeTelefono] = React.useState();

  function enviar()
  {
    let data = new FormData();
    data.append("cedula", cedula);
    data.append("nombre", nombre);
    data.append("apellido", apellido);
    data.append("clave", clave);
    data.append("correo", correo);
    data.append("telefono", telefono);
    fetch("https://adamix.net/defensa_civil/def/registro.php", {
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
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de Voluntario</Text>
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
        <Text style={styles.texto}>Nombre: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNombre}
          value={nombre}
          placeholder="Nombre"
        />
      </View>
      <View>
        <Text style={styles.texto}>Apellido: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeApellido}
          value={apellido}
          placeholder="Apellido"
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
      <View>
        <Text style={styles.texto}>Correo: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeCorreo}
          value={correo}
          placeholder="Correo"
        />
      </View>
      <View>
        <Text style={styles.texto}>Teléfono: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTelefono}
          value={telefono}
          placeholder="Teléfono"
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
