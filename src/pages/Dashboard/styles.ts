import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: #e5e5e5;
`;

export const DashboardContainer = styled.View`
  margin-top: -160px;
  padding: 24px;
`;

export const CardsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
