import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';
import BoxMedida from '../components/BoxMedida';

export default class MisSituaciones extends React.Component {
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
        this.getMedidas(result)
      } else {
        alert('No se ha podido guardar el token.');
      }
    }
    
    getMedidas = (token) =>
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
      if(this.state.loading)
      {
        return (
          <View style={styles.container}>
            <Text>Cargando</Text>
          </View>
        );
      }else {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Mis Situación</Text>
            
              <FlatList
                data = {this.state.datos}
                renderItem = {
                  ({item}) => <BoxMedida item={item} navigation={this.navigation} nav={"Situacion"} />
                }
              />
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
        justifyContent: 'center',
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        color: '#493d8a',
        alignSelf: 'center',
        textAlign: 'center'
    }
});
