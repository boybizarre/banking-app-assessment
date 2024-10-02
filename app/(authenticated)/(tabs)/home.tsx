import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

import RoundBtn from '@/components/RoundBtn';
import Dropdown from '@/components/Dropdown';

import Colors from '@/constants/Colors';

const BALANCE = 1420;

function onAddMoney() {}

const Page = () => {
  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.currency}>₦</Text>
          <Text style={styles.balance}>{BALANCE}</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <RoundBtn text='Add money' icon='add' onPress={onAddMoney} />
        <RoundBtn text='Exchange' icon='refresh' onPress={onAddMoney} />
        <RoundBtn text='Details' icon='list' onPress={onAddMoney} />
        <Dropdown
          trigger={
            <RoundBtn text='Add money' icon='add' onPress={onAddMoney} />
          }
        />
      </View>
    </ScrollView>
  );
};

export default Page;

const styles = StyleSheet.create({
  account: {
    marginVertical: 80,
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 5,
  },

  balance: {
    fontSize: 50,
    fontWeight: 'bold',
  },

  currency: {
    fontSize: 40,
    fontWeight: '300',
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
