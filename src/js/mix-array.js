export default function mixArray(data) {
  return data.sort(() => {
    return Math.random() - 0.5
  })
}
