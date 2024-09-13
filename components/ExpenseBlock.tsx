import { StyleSheet, Text, View, ListRenderItem, FlatList, TouchableOpacity } from 'react-native';
import { ExpenseType } from '@/types';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const ExpenseBlock = ({ expenseList }: { expenseList: ExpenseType[] }) => {
  const renderItem: ListRenderItem<Partial<ExpenseType>> = ({ item, index }) => {

    if(index == 0) {

      return (
        <TouchableOpacity>
          <View style={styles.addItemBtn}>
            <Ionicons name='add' size={22} color={Colors.gray}  />
          </View>
        </TouchableOpacity>
      )
    }

    const amount = item.amount?.split('.');

    return (
      <View
        style={[
          styles.expenseBlock,
          {
            backgroundColor:
              item.name == 'Food'
                ? Colors.blue
                : item.name == 'Savings'
                ? Colors.lightGray
                : Colors.primary,
          },
        ]}
      >
        <Text
          style={[
            styles.expenseBlockText1,
            {
              color:
                item.name == 'Food'
                  ? Colors.black
                  : item.name == 'Savings'
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          {item.name}
        </Text>
        <Text
          style={[
            styles.expenseBlockText2,
            {
              color:
                item.name == 'Food'
                  ? Colors.black
                  : item.name == 'Savings'
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          ₦{amount![0]}.
          <Text style={styles.expenseBlockText2Span}>{amount![1]}</Text>
        </Text>
        <View style={styles.expenseBlock3View}>
          <Text
            style={[
              styles.expenseBlockText1,
              {
                color:
                  item.name == 'Food'
                    ? Colors.black
                    : item.name == 'Savings'
                    ? Colors.black
                    : Colors.white,
              },
            ]}
          >
            {item.percentage}%
          </Text>
        </View>
      </View>
    );
  };

  const staticItem = [{ name: 'Add Item ' }];

  return (
    <View>
      <FlatList
        data={staticItem.concat(expenseList)}
        renderItem={renderItem}
        // keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExpenseBlock;

const styles = StyleSheet.create({
  expenseBlock: {
    backgroundColor: Colors.primary,
    width: 150,
    padding: 15,
    borderRadius: 5,
    marginRight: 20,
    gap: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  expenseBlockText1: {
    color: Colors.white,
    fontSize: 14,
  },

  expenseBlockText2: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },

  expenseBlockText2Span: {
    fontSize: 12,
    fontWeight: '400',
  },

  expenseBlock3View: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
  },

  addItemBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: '666',
    borderStyle: 'dashed',
    borderRadius: 10,
    marginRight: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
