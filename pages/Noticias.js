import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import BoxNot from './components/BoxNot';
import * as SecureStore from 'expo-secure-store';

export default class Noticias extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        datos: [],
        url: 'https://adamix.net/defensa_civil/def/noticias.php'
      }
    }
    componentDidMount() {
      this.getNoticias();
      console.log("TT: " + SecureStore.getItemAsync('token'));
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
            <Text style={styles.title}>Noticias</Text>
            <FlatList
              data = {this.state.datos}
              renderItem = {
                ({item}) => <BoxNot item={item} />
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
