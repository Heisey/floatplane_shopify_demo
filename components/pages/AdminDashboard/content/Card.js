import { withTheme } from 'styled-components'
import { svgs } from '../../../../assets'
import content from './'
import styles from '../styles'

const Card = (props) => {

  const { color, theme } = props

  return (
    <styles.card>
      <content.cardImageTop 
        color={color}
      />
      <styles.cardTop>
        <styles.productName
          color={color}
        >
          puppy
        </styles.productName>
      </styles.cardTop>
      <styles.cardBody>
        <styles.cardInfoContainer>
          <styles.infoTitle>
            viewed
          </styles.infoTitle>
          <styles.infoData>
            154
          </styles.infoData>
        </styles.cardInfoContainer>
        
        <styles.cardInfoContainer>
          <styles.infoTitle>
            sold
          </styles.infoTitle>
          <styles.infoData>
            54
          </styles.infoData>
        </styles.cardInfoContainer>

        <styles.cardInfoContainer>
          <styles.infoTitle>
            ratio
          </styles.infoTitle>
          <styles.infoData>
            33%
          </styles.infoData>
        </styles.cardInfoContainer>
      </styles.cardBody>
      <styles.cardFooter>
        <styles.cardSelectButton>
          day
        </styles.cardSelectButton>
        
        <styles.cardSelectButton>
          month
        </styles.cardSelectButton>
        
        <styles.cardSelectButton>
          year
        </styles.cardSelectButton>
        <styles.svgContainer>
          <svgs.Cog 
            color={color}
            height='20px'
          />
        </styles.svgContainer>
      </styles.cardFooter>
    </styles.card>
  )
}

export default withTheme(Card)