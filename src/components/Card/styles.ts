import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface CardsProps {
  name?: string;
  title?: string;
}

export const Container = styled.View<CardsProps>`
  background: ${(props) => (props.title === 'Total' ? '#FF872C' : '#fff')};
  width: 300px;
  height: 200px;
  border-radius: 5px;
  padding: 24px 24px 42px;
  margin: 0 8px;
  justify-content: space-between;
`;

export const CardTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardTitleText = styled.Text<CardsProps>`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: ${(props) => (props.title === 'Total' ? '#fff' : '#363F5F')};
`;

export const Icon = styled(FeatherIcon)<CardsProps>`
  ${(props) =>
    props.name === 'arrow-up-circle' &&
    css`
      color: #12a454;
    `}

  ${(props) =>
    props.name === 'arrow-down-circle' &&
    css`
      color: #e83f5b;
    `}

    ${(props) =>
    props.name === 'dollar-sign' &&
    css`
      color: #fff;
    `}
`;

export const ValueText = styled.Text<CardsProps>`
  font-family: 'Poppins-Medium';
  font-size: 30px;
  color: ${(props) => (props.title === 'Total' ? '#fff' : '#363F5F')};
`;

export const DateText = styled.Text<CardsProps>`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: ${(props) => (props.title === 'Total' ? '#fff' : '#969CB3')};
`;
