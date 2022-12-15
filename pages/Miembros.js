import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import BoxMiembro from './components/BoxMiembro';

export default class Miembros extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        datos: [],
        url: 'https://adamix.net/defensa_civil/def/miembros.php'
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
            <Text style={styles.title}>Miembros</Text>
            <FlatList
              data = {this.state.datos}
              renderItem = {
                ({item}) => <BoxMiembro item={item} />
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
