// creates random (6) character code
export const createRandomCode = (length = 6) => {
  let result = ''
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
