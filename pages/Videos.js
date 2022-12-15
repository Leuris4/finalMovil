import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import BoxVid from './components/BoxVid';

export default class Videos extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        datos: [],
        url: 'https://adamix.net/defensa_civil/def/videos.php'
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
            <Text style={styles.title}>Videos</Text>
            <FlatList
              data = {this.state.datos}
              renderItem = {
                ({item}) => <BoxVid item={item} vid={"https://www.youtube.com/embed/" + item.link} />
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
        textAlign: 'left'
    }
});
