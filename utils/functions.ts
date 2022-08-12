const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const isActionValid = (action: string) => {
  return ['create', 'edit', 'delete'].includes(action)
}

const uppercaseFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export { classNames, isActionValid, uppercaseFirstLetter }
