import { StyleSheet, Text, View, Image } from 'react-native';

export default Box = ({item}) => {
  return (
    <View style={styles.box}>
        <View>
            <Image 
                source={{ uri: item.foto }}
                style={styles.fotos}
            />
        </View>
        <View>
            <Text style={styles.name}>{item.nombre}</Text>
            <Text style={styles.texto}>{item.descripcion}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    box: {
        width: 350,
        height: 'auto',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        elevation: 3,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: '#fff',
        display: "flex",
        flexDirection: "column",
        overflow: 'hidden',
        padding: 8,
        marginBottom: 5
    },
    fotos: {
        width: 150,
        height: 140,
        position: "relative",
        marginTop: 5,
        alignSelf: 'center',
    },
    name: {
        fontWeight: '800',
        fontSize: 18,
        color: '#493d8a',
        alignSelf: 'center',
        textAlign: 'center'
    },
    texto: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'justify'
    }
});
