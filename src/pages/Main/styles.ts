import styled from 'styled-components/native'
import { fonts } from '../../styles/fonts'
import { colors } from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View``

export const Title = styled.Text``

export const ModalContent = styled.View`
  background: #fff;

  padding: 24px;
  border-radius: 8px;
`

export const ModalTitle = styled.Text`
  font-family: ${fonts.bold};
  margin-bottom: 18px;

  font-size: 18px;
`

export const ModalInputText = styled.Text`
  font-family: ${fonts.regular};
  margin-bottom: 8px;

  font-size: 16px;
`

export const ModalInput = styled.TextInput.attrs({
  placeholderTextColor: colors.placeholder,
})`
  font-family: ${fonts.regular};

  border: 1px solid ${colors.gray};
  border-radius: 4px;

  height: 32px;

  margin-bottom: 16px;

  padding-left: 8px;
`

export const ModalButton = styled.TouchableOpacity`
  align-self: flex-end;
  border-radius: 10px;

  background: ${colors.blue};

  align-items: center;
  justify-content: center;

  height: 32px;
  width: 90px;
`

export const ModalButtonText = styled.Text`
  font-family: ${fonts.bold};
  color: ${colors.white};
`
