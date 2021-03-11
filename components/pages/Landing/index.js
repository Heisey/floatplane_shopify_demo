import Link from 'next/link'
import styles from './styles'

const Landing = () => {

  return (
    <styles.Landing>
      <styles.pageTitle>
        Welcome to <styles.colorAccent>FloatPlane</styles.colorAccent> Shopify
      </styles.pageTitle>
      <h3>Creator Justin <styles.colorAccent>{'{ Heisey }'}</styles.colorAccent> Heisler</h3>
      <Link href='/products'>
        <button>
          try app
        </button>
      </Link>
    </styles.Landing>
  )
}

export default Landing