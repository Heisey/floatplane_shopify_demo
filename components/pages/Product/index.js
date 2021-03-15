
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cards, Modals } from '../../'
import { actions } from '../../../store'
import content from './content'
import styles from './styles'

const ProductPage = () => {
  const router = useRouter()
  const id = router.query.id
  
  const [showModal, showModalHandler] = useState(false)
  const product = useSelector(state => state.products.data)
  console.log(product)
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
      <content.Card 
        img={img}
        price={price}
        title={title}
        subTitle={subTitle}
        onClick={handleShow}
      />
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