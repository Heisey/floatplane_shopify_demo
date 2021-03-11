

const ToastText = (props) => {

  const {heading, message} = props
  return (
    <>
    <h3>{heading}</h3>
    <span>{message}</span>
    </>
  )
}

export default ToastText