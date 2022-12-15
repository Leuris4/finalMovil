import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './components/Onboarding';

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
