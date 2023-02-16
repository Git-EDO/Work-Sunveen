document.addEventListener('DOMContentLoaded', () => {
  const head = document.querySelector('head')
  const productName = document.querySelector(
    'h2.product-description-name'
  ).innerText
  const productPrice = document.querySelector(
    '.product-description-new-price'
  ).innerText

  const metaInfo = `
      <title itemprop="headline">
      ${productName} купить по цене ${productPrice} в Калининграде — интернет магазин sunveen.ru 
      </title>
        <meta
          itemprop="description"
          name="description"
          ${productName} в интернет-магазине sunveen.ru   всего за ${productPrice}. Доставка по РФ, скидки, акции. Звоните: +7 963 738-42-40
      />
      <meta
      itemprop="keywords"
      name="keywords"
      content="${productName}, ${productName} цена, ${productName} купить"
  />
      `
  head.innerHTML += metaInfo

  const miniImages = document.querySelectorAll('.product-mini-item img')
  const zoomImage = document.querySelector('.products-zoom-img > img')

  if (miniImages.length) {
    miniImages.forEach((image) => {
      image.alt = productName
      image.title = productName
    })
  }
  if (zoomImage) {
    zoomImage.alt = productName
    zoomImage.title = productName
  }
})
