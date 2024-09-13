export interface ExpenseType {
  id: number;
  name: string;
  amount: string;
  percentage: string;
}

export interface VirtualCardsType {
  id: string;
  cardNumber: string;
  cardHolder: string;
  expiry: string;
  balance: string;
}

export interface IncomeType {
  id: number;
  name: string;
  amount: string;
}

export interface SpendingType {
  id: number;
  name: string;
  amount: string;
  date: string;
  icon: any;
}