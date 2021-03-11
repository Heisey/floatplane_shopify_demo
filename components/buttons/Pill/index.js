import styles from './styles'

const Pill = (props) => {

  const { text, onClick } = props

  return (
    <styles.Pill onClick={onClick}>
      {text}
    </styles.Pill>
  )
}

export default Pill