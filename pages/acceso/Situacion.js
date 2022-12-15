import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Situacion({navigation, route}) {
    const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
            <Image
                style={styles.foto}
                source={{uri: item.foto}} />
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.subText}>Código: {item.id}</Text>
            <Text style={styles.subText}>{item.fecha}</Text>
            <Text style={styles.texto}>{item.descripcion}</Text>
            <Text style={styles.texto}>Estado: {item.estado}</Text>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  foto: {
    flex: 1,
    justifyContent: 'center',
    width: 300,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  titulo: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  },
  texto: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'justify',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  subText: {
      fontWeight: '300',
      color: '#62656b',
      textAlign: 'center',
      paddingHorizontal: 64,
  }
});
