import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

export default function Albergue({navigation, route}) {
    const { item } = route.params.dt;
    const { location } = route.params.dt;
    const locacion = {
        latitude: parseFloat(location.longitude),
        longitude: parseFloat(location.latitude),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
  return (
    <View style={styles.container}>
        <MapView
            style={styles.map}
            initialRegion={locacion}
            region={locacion} >
                <Marker
                    coordinate={locacion}
                >
                <Callout>
                    <Text>{item.ciudad} {item.codigo}</Text>
                </Callout>
            </Marker>
        </MapView>
        {/* <Text>{item.location}</Text> */}
        <Text style={styles.titulo}>{item.ciudad}</Text>
        <Text style={styles.texto}> {item.codigo} </Text>
        <Text style={styles.texto}><Text style={{fontWeight: 'bold'}}>Edificio: </Text>{item.edificio}</Text>
        <Text style={styles.texto}><Text style={{fontWeight: 'bold'}}>Coordinador: </Text>{item.coordinador}</Text>
        <Text style={styles.texto}><Text style={{fontWeight: 'bold'}}>Telefono: </Text>{item.telefono}</Text>
        <Text style={styles.texto}><Text style={{fontWeight: 'bold'}}>Capacidad: </Text>{item.capacidad == "" || item.capacidad == null? "Indefinido" : item.capacidad}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
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
  },
  map: {
    width: 350,
    height: 200,
  },
});
