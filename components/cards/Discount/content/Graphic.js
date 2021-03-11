import styles from '../styles'

const Graphic = () => {

  return (
    <styles.Graphic>
        <styles.circle size='365px' />
        <styles.circle size='315px' />
        <styles.circle size='265px' />
        <styles.circle size='215px' />
        <styles.circle size='165px' >
          <styles.discountPrice>
            20
          </styles.discountPrice>
        </styles.circle>
    </styles.Graphic>
  )
}

export default Graphic