import React from 'react';

import logoImg from '../../assets/Logo.png';

import { Container, LogoImage, DateText } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  return (
    <Container size={size}>
      <LogoImage source={logoImg} />

      <DateText>16 de abril</DateText>
    </Container>
  );
};

export default Header;
