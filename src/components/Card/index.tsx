import React from 'react';

import formatValue from '../../utils/formatValue';

import {
  Container,
  CardTitle,
  CardTitleText,
  Icon,
  ValueText,
  // DateText,
} from './styles';

interface CardsProps {
  title: string;
  icon: string;
  data: string;
}

const Card: React.FC<CardsProps> = ({ title, icon, data }: CardsProps) => {
  return (
    <Container title={title}>
      <CardTitle>
        <CardTitleText title={title}>{title}</CardTitleText>
        <Icon name={icon} size={40} />
      </CardTitle>
      <ValueText title={title}>{formatValue(Number(data))}</ValueText>
      {/* <DateText title={title}>{data}</DateText> */}
    </Container>
  );
};

export default Card;
