import { StyleSheet, Text, View } from 'react-native';
import { SpendingType } from '@/types';
import Colors from '@/constants/Colors';

// icons
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';

const SpendingBlock = ({ spendingList }: { spendingList: SpendingType[] }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ color: Colors.black, fontSize: 16, marginVertical: 10 }}>
        August <Text style={{ fontWeight: '700' }}>Spending</Text>
      </Text>

      {spendingList.map((spending, index) => (
        <View style={styles.spendingWrapper} key={index}>
          <View style={styles.iconWrapper}>{spending.icon}</View>
          <View style={styles.textWrapper}>
            <View style={{ gap: 5 }}>
              <Text style={styles.textBold}>{spending.name}</Text>
              <Text style={styles.textNormal}>{spending.date}</Text>
            </View>
          </View>
          <Text style={styles.textBold}>₦&nbsp;{spending.amount}</Text>
        </View>
      ))}
    </View>
  );
};

export default SpendingBlock;

const styles = StyleSheet.create({
  textBold: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '600',
  },

  textNormal: {
    color: Colors.black,
  },

  spendingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  iconWrapper: {
    backgroundColor: Colors.gray,
    padding: 15,
    borderRadius: 30,
    marginRight: 19,
  },

  textWrapper: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
