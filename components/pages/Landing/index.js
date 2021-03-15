import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Buttons } from '../../'
import styles from './styles'

const Landing = () => {

  const colors = ['primary', 'secondary', 'tertiary']

  const [curColor, curColorHandler] = useState(colors[Math.floor(Math.random() * colors.length)])

  useEffect(() => {
    const colorChange = setInterval(() => {
      curColorHandler(colors[Math.floor(Math.random() * colors.length)])
    }, 3000)

    clearInterval(colorChange)
  }, [curColor])

  

  return (
    <styles.Landing>
      <styles.pageTitle>
        Welcome to <styles.colorAccent color={curColor}>FloatPlane</styles.colorAccent> Shopify
      </styles.pageTitle>
      <h3>Creator Justin <styles.colorAccent color={curColor}>{'{ Heisey }'}</styles.colorAccent> Heisler</h3>
      <Link href='/products'>
        <Buttons.Pill
          color={curColor}
          text='try app'
        >
          try app
        </Buttons.Pill>
      </Link>
    </styles.Landing>
  )
}

export default Landing