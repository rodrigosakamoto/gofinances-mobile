import React, { useState, useCallback, useRef } from 'react';
import { Alert, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  NewTransactionContainer,
  Title,
  TransactionTypeContainer,
  TransactionTypeButton,
  ButtonText,
} from './styles';

const NewTransaction: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const valueInputRef = useRef<TextInput>(null);

  const [typeSelected, setTypeSelected] = useState('');
  const [typeError, setTypeError] = useState(false);

  const handleTypeSelect = useCallback((type: string) => {
    setTypeSelected(type);
  }, []);

  const handleSubmit = useCallback(
    async ({ title, value, category }, { reset }) => {
      try {
        formRef.current?.setErrors({});
        setTypeError(false);

        const schema = Yup.object().shape({
          title: Yup.string().required('Nome obrigatório'),
          value: Yup.string().required('Valor obrigatório'),
          type: Yup.string().required('Tipo obrigatório'),
          category: Yup.string().required('Categoria obrigatória'),
        });

        await schema.validate(
          { title, value, type: typeSelected, category },
          {
            abortEarly: false,
          },
        );

        const data = {
          title,
          value: Number(value),
          type: typeSelected,
          category,
        };

        await api.post('/transactions', data).then(() => {
          Alert.alert('Parabéns!', 'Transação cadastrada com sucesso.');
        });

        reset();
        setTypeSelected('');

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          if (errors.type) {
            setTypeError(true);
          }
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Houve um erro no cadastro da transação',
        );
      }
    },
    [typeSelected, navigation],
  );

  return (
    <Container>
      <Header size="small" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <NewTransactionContainer>
          <Title>Cadastro</Title>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              autoCorrect={false}
              name="title"
              icon="tag"
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
              icon="dollar-sign"
              placeholder="Preço"
            />
            <TransactionTypeContainer>
              <TransactionTypeButton
                type="income"
                selectedType={typeSelected}
                error={typeError}
                onPress={() => handleTypeSelect('income')}>
                <Icon name="arrow-up-circle" size={24} color="#12A454" />
                <ButtonText>Income</ButtonText>
              </TransactionTypeButton>

              <TransactionTypeButton
                type="outcome"
                selectedType={typeSelected}
                error={typeError}
                onPress={() => handleTypeSelect('outcome')}>
                <Icon name="arrow-down-circle" size={24} color="#E83F5B" />
                <ButtonText>Outcome</ButtonText>
              </TransactionTypeButton>
            </TransactionTypeContainer>
            <Input
              autoCorrect={false}
              name="category"
              icon="list"
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
      </KeyboardAvoidingView>
    </Container>
  );
};

export default NewTransaction;
