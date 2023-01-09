import BackButton from '@components/button/BackButton'
import SlideView from '@components/component/slideView'
import React from 'react'

const product = {
  itemId: 560287792,
  itemImageSrc: [
    {
      imageSrc: 'https://picsum.photos/id/42/1280/774',
    },
    {
      imageSrc: 'https://picsum.photos/id/77/1280/774',
    },
    {
      imageSrc: 'https://picsum.photos/id/41/1280/774',
    },
    {
      imageSrc: 'https://picsum.photos/id/66/1280/774',
    },
    {
      imageSrc: 'https://picsum.photos/id/33/1280/774',
    },
  ],
  itemPrice: 1500000,
  itemTitle: '値下げ可能 airpod pro 2',
  itemKind: 'Airpods Pro 2',
  itemLocation: '東京都足立区',
  itemUploadAt: '56分前',
}
function Product() {
  return (
    <>
      <div className="m-3">
        <BackButton />
      </div>
      <SlideView image={product.itemImageSrc} viewType={'products'} />
    </>
  )
}

export default Product
