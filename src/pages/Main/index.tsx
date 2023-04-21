import React from 'react'
import {
  Container,
  Header,
  ModalButton,
  ModalButtonText,
  ModalContent,
  ModalInput,
  ModalInputText,
  ModalTitle,
  Title,
} from './styles'
import Modal from 'react-native-modal'
import { StatusBar } from 'expo-status-bar'
import { Dimensions } from 'react-native'

export const Main = () => {
  return (
    <Container>
      <StatusBar hidden />
      <Header>
        <Title>CodeLeap Network</Title>
      </Header>

      <Modal isVisible={true}>
        <ModalContent>
          <ModalTitle>Welcome to CodeLeap network!</ModalTitle>

          <ModalInputText>Please enter your username</ModalInputText>
          <ModalInput placeholder='John Doe' />

          <ModalButton>
            <ModalButtonText>ENTER</ModalButtonText>
          </ModalButton>
        </ModalContent>
      </Modal>
    </Container>
  )
}

//todo - criando modal de cadastro de usuário
//todo - criando tela principal do app
