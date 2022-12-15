import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default BoxAlbergue = ({ item, navigation, location } ) => {
    const dt = {
        item: item,
        location: location
    }
    return (
        <Pressable onPress={() => {navigation.navigate("Albergue", item={dt})}}>
            <View style={styles.box}>
                <View>
                    <Text style={styles.name}>{item.ciudad}</Text>
                    <Text style={styles.texto}><Text style={{fontWeight: 'bold'}}>Código: </Text>{item.codigo}</Text>
                </View>
            </View>
        </Pressable>
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
    name: {
        fontWeight: '800',
        fontSize: 18,
        color: '#493d8a',
        alignSelf: 'center',
        textAlign: 'left'
    },
    texto: {
        fontWeight: '300',
        color: '#000',
        textAlign: 'justify',
        marginLeft: 13,
        marginTop: 10
    }
});
