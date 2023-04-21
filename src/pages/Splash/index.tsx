import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackScreenNavigationProps } from '../../types/StackNavigatorParamList'
import CImage from '../../assets/c.svg'
import OImage from '../../assets/o.svg'
import DImage from '../../assets/d.svg'
import EImage from '../../assets/e.svg'
import LImage from '../../assets/l.svg'
import AImage from '../../assets/a.svg'
import PImage from '../../assets/p.svg'
import { Container, AnimatedView } from './styles'

const DELAY_STEP = 100

export const Splash = () => {
  const navigation = useNavigation<StackScreenNavigationProps>()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('SignUp')
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [])

  const renderAnimatedView = (image: React.ReactNode, delay: number) => (
    <AnimatedView
      from={{ transform: [{ translateX: 500 }] }}
      animate={{ transform: [{ translateX: 0 }] }}
      transition={{ type: 'spring', damping: 16 }}
      delay={delay}
    >
      {image}
    </AnimatedView>
  )

  return (
    <Container>
      {renderAnimatedView(<CImage width={40} />, DELAY_STEP * 0)}
      {renderAnimatedView(<OImage width={40} />, DELAY_STEP * 1)}
      {renderAnimatedView(<DImage width={40} />, DELAY_STEP * 2)}
      {renderAnimatedView(<EImage width={40} />, DELAY_STEP * 3)}
      {renderAnimatedView(<LImage width={14} />, DELAY_STEP * 4)}
      {renderAnimatedView(<EImage width={40} />, DELAY_STEP * 5)}
      {renderAnimatedView(<AImage width={40} />, DELAY_STEP * 6)}
      {renderAnimatedView(<PImage width={40} />, DELAY_STEP * 7)}
    </Container>
  )
}
