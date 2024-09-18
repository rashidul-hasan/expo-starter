import {StyleSheet, View, Text} from 'react-native';
import { Stack } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'This login' }} />
      <Text>This is login screen</Text>
    </>
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
