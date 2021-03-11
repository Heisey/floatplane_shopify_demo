import { Buttons } from '../../'
import content from './content'
import styles from './styles'
import { useFormik } from 'formik';
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useState } from 'react'

const Discount = (props) => {

  const product = useSelector(state => state.products.data)
  const [toggleToast, toggleToastHandler] = useState(false)
  const [toastText, toastTextHandler] = useState('')
  const [hasWon, hasWonHandler] = useState(false)
  const [guessMessage, guessMessageHandler] = useState('')

  // console.log(product)

  const formik = useFormik({
    initialValues: {
      guess: '',
    },
    onSubmit: async values => {
      try {
        
        const { data } = await axios({
          method: 'post',
          url: '/discounts',
          data: {
            guess: values.guess,
            productId: product.id,
            productName: product.title,
            productPrice: product.variants[0].price
          }
        })
        hasWonHandler(data.correct)
        toggleToastHandler(true)
        const amountOfTries = data.count

        if (data.correct) {
          toastTextHandler('You have guessed the correct number, you will be redirected in 5 sec')
          guessMessageHandler(data.message)
          window.setTimeout(() => {
            toggleToastHandler(false)
          }, 4900)

          window.setTimeout(() => {
            window.location.assign(data.draftOrderUrl)
          }, 5000)

          return
        }
        
        guessMessageHandler(data.message)
        if (amountOfTries >= 10) {
          toastTextHandler('you have hit you maximum number of attempts, you will be redirected back to home in 5 seconds')
          window.setTimeout(() => {
            window.location.assign('/')
          }, 5000)
        } else {
          toastTextHandler(`you have tried ${guessMessage} times you have ${10 - amountOfTries}`)
        }

        window.setTimeout(() => {
          toggleToastHandler(false)
        }, 4900)
        console.log(data)

        
        
      } catch (err) {
        console.log('on submit error')
        console.log(err.message)
      }
    },
  });

  return (
    <>
    <styles.toast 
      show={toggleToast}
      color={hasWon}
    >
      {hasWon && <content.ToastText heading={guessMessage} message={toastText} />}
      {!hasWon && <content.ToastText heading={guessMessage} message={toastText} />}
    </styles.toast>
    <styles.Discount>
      <styles.backgroundGraphic>
        <content.Graphic />
        <styles.cardBody>
          <styles.discountTitle>
            what is the number
          </styles.discountTitle>
          <form onSubmit={formik.handleSubmit}>
            <styles.input 
              id='guess'
              name='guess'
              type='text'
              minLength='1'
              maxLength='4'
              placeholder='XXXX'
              onChange={formik.handleChange}
              value={formik.values.guess}
            />
            <styles.buttonContainer>
              <Buttons.Pill 
                type='submit'
                text='guess'
              />
            </styles.buttonContainer>
          </form>
          <styles.contestRules>
            Guess the correct number to appyly the shown discount. The number is between 1 - 1000, and you have 15 guesses for the correct answer.
          </styles.contestRules>
        </styles.cardBody>
      </styles.backgroundGraphic>
    </styles.Discount>
    </>
  )
}

export default Discount