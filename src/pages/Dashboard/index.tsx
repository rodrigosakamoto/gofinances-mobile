import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Transaction from '../../components/Transaction';

import formatValue from '../../utils/formatValue';
import api from '../../services/api';

import {
  Container,
  DashboardContainer,
  CardsContainer,
  ListTitle,
  TransactionContainer,
} from './styles';

export interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    api.get('transactions').then((response) => {
      const data = response.data.transactions.map(
        ({ id, title, value, type, category, created_at }: Transaction) => ({
          id,
          title,
          type,
          formattedValue: formatValue(Number(value)),
          category,
          formattedDate: new Date(created_at).toLocaleDateString(),
        }),
      );
      setTransactions(data);
      setBalance(response.data.balance);
    });
  }, []);

  return (
    <Container>
      <Header />
      <DashboardContainer>
        <CardsContainer>
          <Card data={balance.total} title="Total" icon="dollar-sign" />
          <Card data={balance.income} title="Entradas" icon="arrow-up-circle" />
          <Card
            data={balance.outcome}
            title="Saídas"
            icon="arrow-down-circle"
          />
        </CardsContainer>
      </DashboardContainer>

      <ListTitle>Listagem</ListTitle>
      <TransactionContainer
        data={transactions}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => <Transaction data={item} />}
      />
    </Container>
  );
};

export default Dashboard;
