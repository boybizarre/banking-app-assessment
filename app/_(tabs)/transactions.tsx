import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>Transactions</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Page;