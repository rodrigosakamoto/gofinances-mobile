import styled from 'styled-components/native';

interface TransactionProps {
  type: string;
}

export const Container = styled.View`
  height: 128px;
  background: #fff;
  border-radius: 5px;
  padding: 16px 24px;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const TransactionInfo = styled.View``;

export const TransactionTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #363f5f;
`;

export const TransactionPrice = styled.Text<TransactionProps>`
  font-family: 'Poppins-Regular';
  font-size: 20px;

  color: ${(props) => (props.type === 'income' ? '#12A454' : '#E83F5B')};
`;

export const TransactionType = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TransactionTypeText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #969cb3;
`;

export const TransactionTypeDate = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #969cb3;
`;
