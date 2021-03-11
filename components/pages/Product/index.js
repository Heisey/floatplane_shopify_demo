
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Buttons, Cards, Modals } from '../../'
import { actions } from '../../../store'
import styles from './styles'

const ProductPage = () => {
  const router = useRouter()
  const id = router.query.id
  
  const [showModal, showModalHandler] = useState(false)
  const product = useSelector(state => state.products.data)
  const dispatch = useDispatch()
  

  useEffect(() => {
    actions.productActions.getOne(dispatch, id)
  }, [])

  const handleShow = () => {
    showModalHandler(!showModal)
  }

  const hideModal = () => {
    showModalHandler(false)
  }

  const generateProductCard = (product) => {
    let price = ''
    let title = ''
    let subTitle = ''
    let img = ''
    if (product) {
      title = product.title
      if (product.image) {
          img = product.image.src
      }

      if (product.variants) {
        price = product.variants[0].price
        subTitle = product.variants[0].options1
      }
    }
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
            <Buttons.Pill text='purchase' />
            <styles.discount
              onClick={handleShow}
            >apply discount</styles.discount>
          </styles.cardFooter>
        </styles.cardContent>
      </styles.Card>
    )
  }

  return (
    <styles.ProductPage>
      <Modals.CardModal 
        closeModal={hideModal}
        show={showModal}
        >
          <Cards.Discount />
        </Modals.CardModal>
      <styles.backgroundText>CATEGORY text</styles.backgroundText>
      <styles.cardContainer>
        {product && generateProductCard(product)}
      </styles.cardContainer>
    </styles.ProductPage>
  )
}

export default ProductPage