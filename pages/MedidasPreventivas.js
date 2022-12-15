import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import BoxMedida from './components/BoxMedida';

export default class MedidasPreventivas extends React.Component {
    constructor(props) {
      super(props);
      this.navigation = props.navigation;
      this.state = {
        loading: false,
        datos: [],
        url: 'https://adamix.net/defensa_civil/def/medidas_preventivas.php'
      }
    }
    componentDidMount() {
      this.getMedidas();
      this.navigation.addListener('focus', () => {
        this.getMedidas();
      })
    }

    getMedidas = () =>
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
            <Text style={styles.title}>Medidas Preventivas</Text>
            
              <FlatList
                data = {this.state.datos}
                renderItem = {
                  ({item}) => <BoxMedida item={item} navigation={this.navigation} nav={"Medida Preventiva"} />
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
