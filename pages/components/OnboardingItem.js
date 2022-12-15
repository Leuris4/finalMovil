import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';

export default OnboardingItem = ({item}) => {
    const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.imagen} style={[ styles.image, { width, resizeMode: 'contain' } ]} />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.texto}>{item.texto}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 0.4,
    justifyContent: 'center'
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
    textAlign: 'center',
    paddingHorizontal: 64,
  }
});
