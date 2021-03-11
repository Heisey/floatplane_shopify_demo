import styles from './styles'

const CardModal = (props) => {

  const { children, closeModal, show } = props 

  return (
    <styles.CardModal
      show={show}
    >
      <styles.close onClick={closeModal}>X</styles.close>
      <styles.modalContent>
        {children}
      </styles.modalContent>
    </styles.CardModal>
  )
}

export default CardModal