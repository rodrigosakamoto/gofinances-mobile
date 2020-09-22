import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Transaction } from './index';

export const Container = styled.View`
  flex: 1;
  background: #e5e5e5;
`;

export const DashboardContainer = styled.View`
  padding: 0 16px;
  margin-top: -160px;
`;

export const CardsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const ListTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 20px;
  color: #000;
  padding: 24px;
`;

export const TransactionContainer = styled(
  FlatList as new () => FlatList<Transaction>,
)`
  padding: 0 24px;
`;
