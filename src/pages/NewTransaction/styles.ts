import styled, { css } from 'styled-components/native';

interface TransactionProps {
  type: string;
  selectedType: string;
}

export const Container = styled.View`
  flex: 1;
  background: #f0f2f5;
`;

export const NewTransactionContainer = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 20px;
  color: #000;
  margin-bottom: 24px;
`;

export const TransactionTypeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TransactionTypeButton = styled.TouchableOpacity<TransactionProps>`
  height: 50px;
  flex: 1;
  flex-direction: row;
  border: 1px solid #969cb2;
  border-radius: 5px;
  margin: 0 4px 16px 4px;
  justify-content: center;
  align-items: center;
  background: #f0f2f5;

  ${({ type, selectedType }: TransactionProps) => {
    if (type === selectedType && type === 'income') {
      return css`
        background-color: rgba(18, 164, 84, 0.3);
      `;
    }
    if (type === selectedType && type === 'outcome') {
      return css`
        background-color: rgba(232, 63, 91, 0.3);
      `;
    }
  }}
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #363f5f;
  margin-left: 14px;
`;
