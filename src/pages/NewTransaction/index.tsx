import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';
import Button from '../../components/Button';

import api from '../../services/api';

import {
  Container,
  NewTransactionContainer,
  Title,
  Input,
  TransactionTypeContainer,
  TransactionTypeButton,
  ButtonText,
} from './styles';

const NewTransaction: React.FC = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const [typeSelected, setTypeSelected] = useState('');

  const handleTypeSelect = useCallback((type: string) => {
    setTypeSelected(type);
  }, []);

  console.log(typeSelected);

  const handleSubmit = useCallback(() => {
    const data = {
      title,
      value: Number(value),
      type: typeSelected,
      category,
    };

    api.post('/transactions', data).then(() => {
      Alert.alert('Parabéns!', 'Transação cadastrada com sucesso.');
    });
  }, [category, title, value, typeSelected]);

  return (
    <Container>
      <Header size="small" />
      <NewTransactionContainer>
        <Title>Cadastro</Title>
        <Input placeholder="Nome" onChangeText={setTitle} />
        <Input placeholder="Preço" onChangeText={setValue} />
        <TransactionTypeContainer>
          <TransactionTypeButton
            type="income"
            selectedType={typeSelected}
            onPress={() => handleTypeSelect('income')}>
            <Icon name="arrow-up-circle" size={24} color="#12A454" />
            <ButtonText>Income</ButtonText>
          </TransactionTypeButton>

          <TransactionTypeButton
            type="outcome"
            selectedType={typeSelected}
            onPress={() => handleTypeSelect('outcome')}>
            <Icon name="arrow-down-circle" size={24} color="#E83F5B" />
            <ButtonText>Outcome</ButtonText>
          </TransactionTypeButton>
        </TransactionTypeContainer>
        <Input placeholder="Categoria" onChangeText={setCategory} />
        <Button onPress={handleSubmit}>Enviar</Button>
      </NewTransactionContainer>
    </Container>
  );
};

export default NewTransaction;
