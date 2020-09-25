import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 16px;
  border: 2px solid #fff;

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #e83f5b;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff872c;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: 'Poppins-Regular';
  color: #363f5f;
  font-size: 14px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
