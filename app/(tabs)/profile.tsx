import {StyleSheet, View, Text, Button} from 'react-native';
import { router } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <View>
      <Text>This is profile screen</Text>
      <Button onPress={() => router.replace('login')} title={'Go to login'} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
