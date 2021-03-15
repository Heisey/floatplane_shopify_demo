import styles from './styles'

const Pill = (props) => {

  const { color, text, onClick } = props

  return (
    <styles.Pill 
      onClick={onClick}
      color={color}
    >
      {text}
    </styles.Pill>
  )
}

export default Pill