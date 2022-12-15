import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';

export default class Mapa extends React.Component {
    constructor(props) {
      super(props);
      this.navigation = props.navigation;
      this.state = {
        loading: false,
        datos: [],
        url: 'https://adamix.net/defensa_civil/def/albergues.php'
      }
    }
    componentDidMount() {
      this.getNoticias();
    }

    getNoticias = () =>
    {
      this.setState({ loading: true });
      fetch(this.state.url)
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
        latitudeDelta: 0.3,
        longitudeDelta: 0.3,
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
            <Text style={styles.title}>Localización de los Albergues</Text>
            <MapView
              style={styles.map}
              initialRegion={location}
              region={location} >
              {this.state.datos.map((item, index) => {
                return (<Marker
                        coordinate={{
                        latitude: parseFloat(item.lng),
                        longitude: parseFloat(item.lat)
                        }}
                        key={index}>
                          <Callout>
                            <Text>Ciudad: {item.ciudad}</Text>
                            <Text>Código: {item.codigo}</Text>
                            <Text>Edificio: {item.edificio}</Text>
                            <Text>Coordinador: {item.coordinador}</Text>
                            <Text>Telefono: {item.telefono}</Text>
                            <Text>Capacidad: {item.capacidad}</Text>
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
