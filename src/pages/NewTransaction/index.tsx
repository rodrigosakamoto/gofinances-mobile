import React from 'react';

import Header from '../../components/Header';

import { Container, NewTransactionContainer, Title } from './styles';

const NewTransaction: React.FC = () => {
  return (
    <Container>
      <Header size="small" />
      <NewTransactionContainer>
        <Title>Cadastro</Title>
      </NewTransactionContainer>
    </Container>
  );
};

export default NewTransaction;
