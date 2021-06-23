const getCardWidthBasedOnZoomLevel = () => {
  let zoom = ((window.outerWidth - 10) / window.innerWidth) * 100
  let width = zoom <= '90' ? '13vw' : '15vw'
  return width
}

export default getCardWidthBasedOnZoomLevel
