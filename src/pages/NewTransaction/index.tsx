import React, { useState, useCallback, useRef } from 'react';
import { Alert, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

import api from '../../services/api';

import {
  Container,
  NewTransactionContainer,
  Title,
  TransactionTypeContainer,
  TransactionTypeButton,
  ButtonText,
} from './styles';

const NewTransaction: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const valueInputRef = useRef<TextInput>(null);

  const [typeSelected, setTypeSelected] = useState('');

  const handleTypeSelect = useCallback((type: string) => {
    setTypeSelected(type);
  }, []);

  const handleSubmit = useCallback(
    ({ title, value, category }) => {
      const data = {
        title,
        value: Number(value),
        type: typeSelected,
        category,
      };

      api.post('/transactions', data).then(() => {
        Alert.alert('Parabéns!', 'Transação cadastrada com sucesso.');
      });
    },
    [typeSelected],
  );

  return (
    <Container>
      <Header size="small" />
      <NewTransactionContainer>
        <Title>Cadastro</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            autoCorrect={false}
            name="title"
            placeholder="Nome"
            returnKeyType="next"
            onSubmitEditing={() => {
              valueInputRef.current?.focus();
            }}
          />
          <Input
            ref={valueInputRef}
            autoCorrect={false}
            name="value"
            placeholder="Preço"
          />
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
          <Input
            autoCorrect={false}
            name="category"
            placeholder="Categoria"
            returnKeyType="send"
            onSubmitEditing={() => {
              formRef.current?.submitForm();
            }}
          />
          <Button
            onPress={() => {
              formRef.current?.submitForm();
            }}>
            Enviar
          </Button>
        </Form>
      </NewTransactionContainer>
    </Container>
  );
};

export default NewTransaction;
