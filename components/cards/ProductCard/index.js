import Link from 'next/link'
import { utils } from '../../../core'
import styles from './styles'

const ProductCard = (props) => {

  const { id, image, name, price } = props;

  return (
    <styles.ProductCard>
      <styles.imageContainer>
        <styles.productImage src={image} />
      </styles.imageContainer>
      <styles.contentContainer>
        <styles.name>{name}</styles.name>
        <styles.price>${price}</styles.price>
        <Link href={utils.generatePath('/products', id)}>
          <styles.button>more</styles.button>
        </Link>
      </styles.contentContainer>
    </styles.ProductCard>
  )
}

export default ProductCard