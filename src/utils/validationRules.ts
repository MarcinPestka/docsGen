export const requiredRule = (v: string, validationText: string = 'Field is required') => {
  if (v) {
    return true
  }
  return validationText
}
