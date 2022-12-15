import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AlberguesList from './AlberguesList';

export default function Albergues({ navigation }) {
  return (
    <View style={styles.container}>
        <AlberguesList navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    width: 200,
    resizeMode: 'contain'
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
  }
});
