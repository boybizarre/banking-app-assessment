import {
  StyleSheet,
  Text,
  View,
  ListRenderItem,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Colors from '@/constants/Colors';
import { IncomeType } from '@/types';

// icons
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const IncomeBlock = ({ incomeList }: { incomeList: IncomeType[] }) => {
  const renderItem: ListRenderItem<Partial<IncomeType>> = ({ item, index }) => {
    const amount = item.amount?.split('.');
    let icon = <FontAwesome6 name='naira-sign' size={22} color='black' />;

    if (item.name == 'Freelancing') {
      icon = <Entypo name='wallet' size={22} color='black' />;
    }

    if (item.name == 'Interest') {
      icon = (
        <MaterialCommunityIcons name='wallet-plus' size={22} color='black' />
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>{icon}</View>
          <TouchableOpacity>
            <Feather name='more-horizontal' size={20} color='black' />
          </TouchableOpacity>
        </View>
        <Text style={{ color: Colors.white }}>{item.name}</Text>
        <Text style={{ color: Colors.white, fontSize: 18, fontWeight: 600 }}>
          {amount![0]}.
          <Text style={{ fontWeight: 400, fontSize: 12 }}>{amount![1]}</Text>
        </Text>
      </View>
    );
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ color: Colors.black, fontSize: 16, marginBottom: 20 }}>
        My <Text style={{ fontWeight: 700 }}>Income</Text>
      </Text>
      <FlatList
        data={incomeList}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default IncomeBlock;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    padding: 20,
    borderRadius: 5,
    marginRight: 15,
    width: 150,
    gap: 10,
  },

  icon: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    alignSelf: 'flex-start',
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
