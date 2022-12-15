import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import BoxAlbergue from './components/BoxAlbergue';

export default class AlberguesList extends React.Component {
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
      this.getAlbergue();
      this.navigation.addListener('focus', () => {
        this.getAlbergue();
      })
    }

    getAlbergue = () =>
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
            <Text style={styles.title}>Albergues</Text>
            
              <FlatList
                data = {this.state.datos}
                renderItem = {
                  ({item}) => <BoxAlbergue item={item} navigation={this.navigation} location={{
                    latitude: item.lat,
                    longitude: item.lng,
                    latitudeDelta: 0.3,
                    longitudeDelta: 0.3,
                  }} />
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
