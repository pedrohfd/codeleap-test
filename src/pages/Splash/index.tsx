import React from 'react'
import { AnimatedView, Container } from './styles'
import CImage from '../../assets/c.svg'
import OImage from '../../assets/o.svg'
import DImage from '../../assets/d.svg'
import EImage from '../../assets/e.svg'
import LImage from '../../assets/l.svg'
import AImage from '../../assets/a.svg'
import PImage from '../../assets/p.svg'

export const Splash = () => {
  return (
    <Container>
      <AnimatedView
        from={{ transform: [{ translateX: 500 }] }}
        animate={{ transform: [{ translateX: 0 }] }}
        transition={{ type: 'spring', damping: 16 }}
      >
        <CImage width={40} />
      </AnimatedView>
      <AnimatedView
        from={{ transform: [{ translateX: 500 }] }}
        animate={{ transform: [{ translateX: 0 }] }}
        transition={{ type: 'spring', damping: 16 }}
        delay={100}
      >
        <OImage width={40} />
      </AnimatedView>
      <AnimatedView
        from={{ transform: [{ translateX: 500 }] }}
        animate={{ transform: [{ translateX: 0 }] }}
        transition={{ type: 'spring', damping: 16 }}
        delay={200}
      >
        <DImage width={40} />
      </AnimatedView>
      <AnimatedView
        from={{ transform: [{ translateX: 500 }] }}
        animate={{ transform: [{ translateX: 0 }] }}
        transition={{ type: 'spring', damping: 16 }}
        delay={300}
      >
        <EImage width={40} />
      </AnimatedView>
      <AnimatedView
        from={{ transform: [{ translateX: 500 }] }}
        animate={{ transform: [{ translateX: 0 }] }}
        transition={{ type: 'spring', damping: 16 }}
        delay={400}
      >
        <LImage width={14} />
      </AnimatedView>
      <AnimatedView
        from={{ transform: [{ translateX: 500 }] }}
        animate={{ transform: [{ translateX: 0 }] }}
        transition={{ type: 'spring', damping: 16 }}
        delay={500}
      >
        <EImage width={40} />
      </AnimatedView>
      <AnimatedView
        from={{ transform: [{ translateX: 500 }] }}
        animate={{ transform: [{ translateX: 0 }] }}
        transition={{ type: 'spring', damping: 16 }}
        delay={600}
      >
        <AImage width={40} />
      </AnimatedView>
      <AnimatedView
        from={{ transform: [{ translateX: 500 }] }}
        animate={{ transform: [{ translateX: 0 }] }}
        transition={{ type: 'spring', damping: 16 }}
        delay={700}
      >
        <PImage width={40} />
      </AnimatedView>
    </Container>
  )
}
