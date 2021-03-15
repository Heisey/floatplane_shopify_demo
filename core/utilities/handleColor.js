
const handleColor = (props, color) => {
  switch(color) {
    case 'primary':
      return props.theme.colors.primaryColor

    case 'primary-light':
      return props.theme.colors.primaryColorLight

    case 'primary-dark':
      return props.theme.colors.primaryColorDark

    case 'secondary': 
      return props.theme.colors.secondaryColor

    case 'secondary-light':
      return props.theme.colors.secondaryColorLight

    case 'secondary-dark':
      return props.theme.colors.secondaryColorDark

    case 'tertiary':
      return props.theme.colors.tertiaryColor

    case 'tertiary-light':
      return props.theme.colors.tertiaryColorLight

    case 'tertiary-dark':
      return props.theme.colors.tertiaryColorDark

    case 'quatenary':
      return props.theme.colors.quatenaryColor

    case 'quatenary-light':
      return props.theme.colors.quatenaryColorLight

    case 'quatenary-dark':
      return props.theme.colors.quatenaryColorDark

    case 'base':
      return props.theme.colors.baseColor

    case 'base-light':
      return props.theme.colors.baseColorLight

    case 'base-dark':
      return props.theme.colors.baseColorDark

    case 'success':
      return props.theme.colors.success

    case 'error':
      return props.theme.colors.error

    default:
      return props.theme.colors.white
  }
}

export default handleColor