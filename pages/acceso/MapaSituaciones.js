import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import * as SecureStore from 'expo-secure-store';

export default class MapaSituaciones extends React.Component {
    constructor(props) {
      super(props);
      this.navigation = props.navigation;
      this.state = {
        loading: false,
        datos: [],
        url: 'https://adamix.net/defensa_civil/def/situaciones.php'
      }
    }
    componentDidMount() {
      this.getValueFor("token");
      this.navigation.addListener('focus', () => {
        this.getValueFor("token");
      })
    }

    getValueFor = async (key) => {
      let result = await SecureStore.getItemAsync(key);
      if (result) {
        this.getSituaciones(result)
      } else {
        alert('No se ha podido guardar el token.');
      }
    }

    getSituaciones = (token) =>
    {
      let data = new FormData();
      data.append("token", token);
      this.setState({ loading: true });
      fetch(this.state.url, {
        method: 'POST',
        body: data,
      })
      .then(response => response.json())
      .then(response  => {
        this.setState({
          datos: response.datos,
          loading: false
        })
      });
    }
    render() {
      // alert(this.state.datos[0])
      const location = {
        latitude: 18.47893,
        longitude: -69.89178,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }
      if(this.state.loading)
      {
        return (
          <View style={styles.container1}>
            <Text>Cargando</Text>
          </View>
        );
      }else {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Mapa de Situaciones</Text>
            <MapView
              style={styles.map}
              initialRegion={location}
              region={location} >
              {this.state.datos.map((item, index) => {
                return (<Marker
                        coordinate={{
                        latitude: parseFloat(item.latitud),
                        longitude: parseFloat(item.longitud)
                        }}
                        key={index}>
                          <Callout>
                            <Text>Código: {item.id}</Text>
                            <Text>{item.fecha}</Text>
                            <Text>Estado: {item.estado}</Text>
                          </Callout>
                        </Marker>); 
              })}
            </MapView>
          </View>
        );
      }
      
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    container1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        color: '#493d8a',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 20
    },
    map: {
      width: 350,
      height: 500,
    },
});
