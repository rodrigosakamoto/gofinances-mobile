import styled from 'styled-components/native';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  justify-content: space-between;

  background: #5636d3;

  height: ${(props) => (props.size === 'small' ? '81px' : '240px')};
  padding: 24px;
`;

export const LogoImage = styled.Image``;

export const DateText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #fff;
`;
