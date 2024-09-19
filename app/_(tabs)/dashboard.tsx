import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

// utility
import Colors from '@/constants/Colors';
import { PieChart } from 'react-native-gifted-charts';

// compoenents
import Header from '@/components/Header';
import ExpenseBlock from '@/components/ExpenseBlock';
import IncomeBlock from '@/components/IncomeBlock';
import SpendingBlock from '@/components/SpendingBlock';
import VirtualCards from '@/components/VirtualCards';

// data
import EXPENSELIST from '@/data/expenses.js';
import INCOMELIST from '@/data/incomes.js';
import SPENDINGLIST from '@/data/spending.js';

const Page = () => {
  const pieData = [
    {
      value: 55,
      color: Colors.primary,
      focused: true,
      text: '55%',
    },
    {
      value: 30,
      color: Colors.blue,
      focused: true,
      text: '30%',
    },
    {
      value: 10,
      color: Colors.tint,
      focused: true,
      text: '10%',
    },
    {
      value: 5,
      color: '#ffa5ba',
      gradientCenterColor: '#ff7f97',
      text: '5%',
    },
  ];

  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={[styles.container, { paddingTop: 40 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>

          <VirtualCards />

          <View style={styles.expensesWrapper}>
            <View style={{ gap: 10 }}>
              <Text style={styles.myExpenses}>
                My <Text style={{ fontWeight: 700 }}>Expenses</Text>
              </Text>
              <Text style={styles.amount}>
                ₦25,086.
                <Text style={{ fontSize: 22, fontWeight: 700 }}>15</Text>
              </Text>
            </View>
            <View style={{ paddingVertical: 20, alignItems: 'center' }}>
              <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                semiCircle
                focusOnPress
                radius={70}
                innerRadius={55}
                innerCircleColor={Colors.white}
                centerLabelComponent={() => {
                  return (
                    <View
                      style={{ justifyContent: 'center', alignItems: 'center' }}
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          color: 'black',
                          fontWeight: 'bold',
                        }}
                      >
                        55%
                      </Text>

                      {/* <Text style={{ fontSize: 14, color: 'black' }}>
                        Excellent
                      </Text> */}
                    </View>
                  );
                }}
              />
            </View>
          </View>

          <ExpenseBlock expenseList={EXPENSELIST} />
          <IncomeBlock incomeList={INCOMELIST} />
          <SpendingBlock spendingList={SPENDINGLIST} />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },

  myExpenses: {
    color: Colors.black,
    fontSize: 16,
  },

  amount: {
    color: Colors.black,
    fontSize: 36,
    fontWeight: 700,
  },

  expensesWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Page;
