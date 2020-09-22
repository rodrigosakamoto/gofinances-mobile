import React from 'react';

import {
  Container,
  TransactionInfo,
  TransactionTitle,
  TransactionPrice,
  TransactionType,
  TransactionTypeText,
  TransactionTypeDate,
} from './styles';

interface TransactionProps {
  data: {
    title: string;
    type: string;
    formattedValue: string;
    category: {
      title: string;
    };
    formattedDate: string;
  };
}

const Transaction: React.FC<TransactionProps> = ({
  data,
}: TransactionProps) => {
  return (
    <Container>
      <TransactionInfo>
        <TransactionTitle>{data.title}</TransactionTitle>
        {data.type === 'income' ? (
          <TransactionPrice type={data.type}>
            {data.formattedValue}
          </TransactionPrice>
        ) : (
          <TransactionPrice type={data.type}>
            - {data.formattedValue}
          </TransactionPrice>
        )}
      </TransactionInfo>
      <TransactionType>
        <TransactionTypeText>{data.category.title}</TransactionTypeText>
        <TransactionTypeDate>{data.formattedDate}</TransactionTypeDate>
      </TransactionType>
    </Container>
  );
};

export default Transaction;
