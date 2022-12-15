import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import * as Linking from 'expo-linking';

export default function AcercaDe() {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Image
                style={styles.foto}
                source={require('./sources/img/Yo.png')}
            />
            <Text style={styles.nombre}>Leuris Joel Morel Nuñez{"\n"}2018-6681</Text>
            
            <Text style={styles.texto}>
              <Text style={styles.text}>Celular: </Text>
              <Pressable
               onPress={() => Linking.openURL("tel:+18294700904")}>
                <Text style={styles.link}>{"(829) 470-0904"}</Text>
              </Pressable>
            </Text>
            <Text style={styles.texto}>
              <Text style={styles.text}>Telegram: </Text>
              <Pressable
               onPress={() => Linking.openURL("https://t.me/+18294700904")}>
                <Text style={styles.link}>{"Click Aquí"}</Text>
              </Pressable>
            </Text>
            <Text style={styles.texto}>
              <Text style={styles.text}>Correo personal: </Text>
              <Pressable
               onPress={() => Linking.openURL("mailto:leurismorel7@gmail.com")}>
                <Text style={styles.link}>{"leurismorel7@gmail.com"}</Text>
              </Pressable>
            </Text>
            <Text style={styles.texto}>
              <Text style={styles.text}>Correo institucional: </Text>
              <Pressable
               onPress={() => Linking.openURL("mailto:20186681@itla.edu.do")}>
                <Text style={styles.link}>{"20186681@itla.edu.do"}</Text>
              </Pressable>
            </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  nombre: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
  box: {
    width: 350,
    backgroundColor: "#F9F9F9",
    borderRadius: 20,
    paddingBottom: 50,
    paddingTop: 50,
    marginTop: 50
  },
  text: {
    fontWeight: 'bold',
  },
  foto: {
    width: 200,
    height: 300,
    borderRadius: 20,
    alignSelf: 'center'
  },
  texto: {
    marginLeft: 15
  },
  link: {
    color: "#476BF1",
  }
});
