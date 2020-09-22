import React from 'react';

import {
  Container,
  CardTitle,
  CardTitleText,
  Icon,
  ValueText,
  DateText,
} from './styles';

interface CardsProps {
  title: string;
  icon: string;
}

const Card: React.FC<CardsProps> = ({ title, icon }: CardsProps) => {
  return (
    <Container title={title}>
      <CardTitle>
        <CardTitleText title={title}>{title}</CardTitleText>
        <Icon name={icon} size={40} />
      </CardTitle>
      <ValueText title={title}>R$ 17.400,00</ValueText>
      {/* <DateText title={title}>Última entrada dia 13 de abril</DateText> */}
    </Container>
  );
};

export default Card;
