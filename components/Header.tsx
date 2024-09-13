import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';

const Header = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={styles.headerWrapper}>
        <View style={styles.userInfoWrapper}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/250?u=19' }}
            style={styles.userImg}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.nameText}>Hi, Olawale</Text>
            <Text style={[styles.nameText, { fontSize: 16 }]}>
              Your <Text style={{ fontWeight: '700' }}>Budget</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Link style={styles.btnWrapper} href={'/(tabs)/transactions'} asChild>
            <Text style={styles.btn}>My Transactions</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  btnWrapper: {
    borderColor: '#666',
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  },

  nameText: {
    color: Colors.black,
    fontSize: 12,
  },

  userInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },

  btn: {
    color: Colors.black,
    fontSize: 12,
  },
});
