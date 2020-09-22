import React from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';

import { Container, DashboardContainer, CardsContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <DashboardContainer>
        <CardsContainer>
          <Card title="Entradas" icon="arrow-up-circle" />
          <Card title="Saídas" icon="arrow-down-circle" />
          <Card title="Total" icon="dollar-sign" />
        </CardsContainer>
      </DashboardContainer>
    </Container>
  );
};

export default Dashboard;
