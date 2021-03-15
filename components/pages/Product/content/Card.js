import { Buttons } from '../../../'
import styles from '../styles'

const Card = (props) => {

  const { img, onClick, price, subTitle, title } = props

  return (
    <styles.Card>
      <styles.imageBox>
        <styles.productImage src={img} />
      </styles.imageBox>
      <styles.cardContent>
        <styles.cardHeader>
          <styles.priceContainer>
            <styles.dollar>$</styles.dollar>
            <styles.price>{price}</styles.price>
          </styles.priceContainer>
        </styles.cardHeader>
        <styles.cardBody>
          <styles.name>{title}</styles.name>
          <styles.subTitle>{subTitle}</styles.subTitle>
        </styles.cardBody>
        <styles.cardFooter>
          <Buttons.Pill color='primary' text='purchase' />
          <styles.discount
            onClick={onClick}
          >apply discount</styles.discount>
        </styles.cardFooter>
      </styles.cardContent>
    </styles.Card>
  )
}

export default Card