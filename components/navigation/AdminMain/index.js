import Link from 'next/link'
import { withTheme } from 'styled-components'
import styles from './styles'

const AdminMain = (props) => {

  const { theme } = props
  return (
    <styles.AdminMain>
      <styles.navTitle>
        puppies nav
      </styles.navTitle>
      <styles.linkContainer>
        <Link href='/products'>
          <styles.button
            backgroundColor={theme.colors.primaryColor}
          >
            PRODUCTS
          </styles.button>
        </Link>

        <styles.button
          backgroundColor={theme.colors.secondaryColor}
        >
          Orders
        </styles.button>

        <styles.button
          backgroundColor={theme.colors.tertiaryColor}
        >
          Users
        </styles.button>
      </styles.linkContainer>
      
    </styles.AdminMain>
  )
}

export default withTheme(AdminMain)