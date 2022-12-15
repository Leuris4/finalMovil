import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Historia({navigation, item}) {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('./sources/img/logo-defensa-civil.png')} style={styles.logo}/>
      <Text style={styles.titulo}>Historia</Text>
      <Text style={styles.texto}>
        Antes del año 1966, cuando llegaba la temporada de huracanes, un grupo de radioaficionados se reunía en la Cruz Roja para estar atentos 
        por si surgía algún tipo de emergencia, inmediatamente ponerse a disposición y ayudar en todo lo posible, inclusive, usando sus propios 
        equipos de comunicación para así tener contacto con el exterior en caso de que las redes telefónicas resultaran afectadas.
      </Text>
      <Text style={styles.texto}>
        Al surgir el triunvirato fue designado el Dr. Rafael Cantizano Arias, como presidente de la Cruz Roja y al mismo tiempo nombraron al Ing. 
        Carlos D' Franco como director de la Defensa Civil, quien con un grupo compuesto por seis personas, se instaló en la calle Francia esquina 
        Galván, siendo esa la primera oficina de la Defensa Civil.
      </Text>
      <Text style={styles.texto}>
        Al surgir el Gobierno Provisional, presidido por el Dr. Héctor García Godoy, a los diecisiete días del mes de junio de 1966, fue 
        promulgada la Ley 257, mediante la cual fue creada la Defensa Civil, institución dependiente de la Secretaría Administrativa de la 
        Presidencia (ahora Ministerio de la Presidencia) y quien en la actualidad preside la Comisión Nacional de Emergencias.
      </Text>
      <Text style={styles.texto}>
        Más adelante, el local fue trasladado a la calle Dr. Delgado No. 164 y luego en la gestión del Contralmirante Radhamés Lora Salcedo se 
        reubicó a la Plaza de la Salud, donde aún permanece.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center'
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
    textAlign: 'justify',
    marginHorizontal: 20,
    marginBottom: 10,
  }
});
