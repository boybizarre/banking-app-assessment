import { FlatList, View, Text, StyleSheet } from 'react-native';

import { VirtualCardsType } from '@/types';
import Colors from '@/constants/Colors';

const virtualCards = [
  {
    id: '1',
    cardNumber: '**** **** **** 1234',
    cardHolder: 'Olawale Johnson',
    expiry: '12/25',
    balance: '₦11,250.00',
  },
  {
    id: '2',
    cardNumber: '**** **** **** 5678',
    cardHolder: 'Olawale Johnson',
    expiry: '08/26',
    balance: '₦22,850.00',
  },
  {
    id: '3',
    cardNumber: '**** **** **** 9101',
    cardHolder: 'Olawale Johnson',
    expiry: '04/27',
    balance: '₦1.233,500.00',
  },
];

const VirtualCardItem = ({ card }: { card: VirtualCardsType }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardNumber}>{card.cardNumber}</Text>
      <Text style={styles.cardHolder}>{card.cardHolder}</Text>
      <Text style={styles.expiry}>Expiry: {card.expiry}</Text>
      <Text style={styles.balance}>Balance: {card.balance}</Text>
    </View>
  );
};

const VirtualCards = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ gap: 10 }}>
        <Text style={{ color: Colors.black, fontSize: 16 }}>
          My <Text style={{ fontWeight: 700 }}>Cards</Text>
        </Text>
      </View>
      <FlatList
        data={virtualCards}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <VirtualCardItem card={item} />}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },

  cardContainer: {
    backgroundColor: Colors.black,
    gap: 10,
    padding: 20,
    borderRadius: 10,
    marginRight: 20, // Add space between horizontal items
    elevation: 5,
    width: 300, // Set a width for each card
  },
  cardNumber: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardHolder: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 10,
  },
  expiry: {
    color: '#fff',
    fontSize: 16,
  },
  balance: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default VirtualCards;
