import { StyleSheet, Text, View, Image } from 'react-native';
import { Video } from 'expo-av';
import { WebView } from 'react-native-webview';

export default BoxVid = ({item, vid}) => {
    const video = "https://www.youtube.com/embed/" + item.link;
    return (
        <View style={styles.box}>
            <View>
                {/* <Video
                    style={styles.video}
                    source={{
                    uri: "https://www.youtube.com/watch?v=CyIF2IneZu4",
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                /> */}
                {/* <WebView /> */}
                <WebView
                    scalesPageToFit={true}
                    bounces={false}
                    javaScriptEnabled
                    style={styles.video}
                    originWhitelist={['*']}
                    source={{ html: '<iframe width="950" height="700" src="' + video + '"></iframe>' }}
                />
            </View>
            <View>
                <Text style={styles.name}>{item.titulo}</Text>
                <Text style={styles.subText}>{item.fecha}</Text>
                <Text style={styles.texto}>{item.descripcion == "null" || item.descripcion == null? "" : item.descripcion}</Text>
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
        marginBottom: 10
    },
    video: {
        width: 340,
        height: 250,
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
        color: '#000',
        textAlign: 'justify'
    },
    subText: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64,
    }
});
