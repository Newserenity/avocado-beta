import BackButton from '@components/button/BackButton'
import Hamburger from '@components/button/hamburger'
import BottomBar from '@components/component/bottomBar'
import Legal from '@components/component/legal'
import UserHistoryBadge from '@components/component/userHistoryBadge'
import ProductsGroup from '@components/productsGroup'
import React from 'react'

const sell = [
  {
    itemId: 89387032,
    itemImageSrc: 'https://picsum.photos/id/27/1280/774',
    itemPrice: 3000000,
    itemKind: 'Panasonic',
    itemLocation: '東京都渋谷区',
    itemUploadAt: '1時間前',
  },
  {
    itemId: 550287792,
    itemImageSrc: 'https://picsum.photos/id/52/1280/774',
    itemPrice: 500000,
    itemKind: 'Airpods Pro 2',
    itemLocation: '東京都足立区',
    itemUploadAt: '56分前',
  },
  {
    itemId: 13287532,
    itemImageSrc: 'https://picsum.photos/id/181/1280/774',
    itemPrice: 303000,
    itemKind: 'Google Home',
    itemLocation: '東京都品川区',
    itemUploadAt: '11分前',
  },
  {
    itemId: 29287732,
    itemImageSrc: 'https://picsum.photos/id/10/1280/774',
    itemPrice: 380000,
    itemKind: 'MB Pro 22 M1 MAX',
    itemLocation: '東京都板橋区',
    itemUploadAt: '1日前',
  },
  {
    itemId: 89387132,
    itemImageSrc: 'https://picsum.photos/id/180/1280/774',
    itemPrice: 9800,
    itemKind: 'DELL',
    itemLocation: '東京都渋谷区',
    itemUploadAt: '1時間前',
  },
  {
    itemId: 560287792,
    itemImageSrc: 'https://picsum.photos/id/125/1280/774',
    itemPrice: 1500000,
    itemKind: 'Airpods Pro 2',
    itemLocation: '東京都足立区',
    itemUploadAt: '56分前',
  },
]

const sold = [
  {
    itemId: 891237032,
    itemImageSrc: 'https://picsum.photos/id/96/1280/774',
    itemPrice: 3000000,
    itemKind: 'サムスン',
    itemLocation: '埼玉県大宮',
    itemUploadAt: '3時間前',
  },
  {
    itemId: 599287792,
    itemImageSrc: 'https://picsum.photos/id/182/1280/774',
    itemPrice: 500000,
    itemKind: 'Airpods Pro',
    itemLocation: '札幌市白石区',
    itemUploadAt: '50分前',
  },
  {
    itemId: 13273532,
    itemImageSrc: 'https://picsum.photos/id/41/1280/774',
    itemPrice: 303000,
    itemKind: '有機EL',
    itemLocation: '小樽市',
    itemUploadAt: '19分前',
  },
  {
    itemId: 21207732,
    itemImageSrc: 'https://picsum.photos/id/85/1280/774',
    itemPrice: 380000,
    itemKind: 'MB Pro 21 M1 MAX',
    itemLocation: '旭川市',
    itemUploadAt: '2日前',
  },
  {
    itemId: 88887132,
    itemImageSrc: 'https://picsum.photos/id/64/1280/774',
    itemPrice: 9800,
    itemKind: 'LG',
    itemLocation: '沖縄県沖縄市',
    itemUploadAt: '5時間前',
  },
  {
    itemId: 569467792,
    itemImageSrc: 'https://picsum.photos/id/17/1280/774',
    itemPrice: 1500000,
    itemKind: 'MBA 22',
    itemLocation: '大阪府旭区',
    itemUploadAt: '10分前',
  },
]

const badge = [
  {
    title: '本人確認',
    value: 'OK',
  },
  {
    title: '評価',
    value: 4.8,
  },
  {
    title: '販売',
    value: 10,
  },
  {
    title: '購入',
    value: 5,
  },
  {
    title: 'オープン',
    value: '+50',
  },
]

function Mypage() {
  return (
    <>
      <h1 className="my-5 px-6 text-2xl font-semibold">マイページ</h1>
      <div className="space-y-2 px-6">
        <div className="flex flex-row items-center justify-between">
          <div className="space-y-5">
            <div className="flex flex-row items-center justify-between ">
              <div className="flex flex-row items-center">
                <div className="h-16 w-16 rounded-full bg-slate-500"></div>
                <div className="pl-3">
                  <p className="text-md font-semibold">One Kiss</p>
                  <div className="flex flex-row items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    <p className="text-sm text-slate-400">オンライン</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Hamburger />
        </div>
      </div>
      <div className="item-center flex w-full space-x-2 overflow-auto px-3 py-5 text-center">
        {badge.map((res) => (
          <UserHistoryBadge value={res.value} title={res.title} />
        ))}
      </div>
      <div className="space-y-10">
        <ProductsGroup productlist={sell} title="販売中" />
        <ProductsGroup productlist={sold} title="販売済み" />
      </div>
      <Legal />
      <BottomBar />
    </>
  )
}

export default Mypage
