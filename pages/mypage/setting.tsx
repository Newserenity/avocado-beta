import BackButton from '@components/button/BackButton'
import Hamburger from '@components/button/hamburger'
import SwitchToggle from '@components/input/switchToggle'
import { FiChevronRight } from 'react-icons/fi'
import React from 'react'

function setting() {
  return (
    <>
      <div className="my-5 flex flex-row content-center justify-between px-6 text-center">
        <BackButton />
        <h1 className="text-lg font-semibold">マイページ</h1>
        <div></div>
      </div>
      <div className="space-y-5">
        <div>
          <label className="ml-6 pb-2 text-xs text-gray-500">通知</label>
          <div className="mx-3 flex flex-col rounded-xl bg-gray-50 px-3">
            <div className="flex flex-row items-center justify-between space-x-2 py-3 text-center">
              <label
                htmlFor="remember"
                className="text-sm font-semibold text-gray-700 "
              >
                通知を受け取る
              </label>
              <SwitchToggle />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2 py-3 text-center">
              <label
                htmlFor="remember"
                className="text-sm font-semibold text-gray-700 "
              >
                ニュースレターを受け取る
              </label>
              <SwitchToggle />
            </div>
          </div>
        </div>
        <div>
          <label className="ml-6 pb-2 text-xs text-gray-500">ユーザー</label>
          <div className="mx-3 flex flex-col rounded-xl bg-gray-50 px-3">
            <div className="flex flex-row items-center justify-between space-x-2 py-3 text-center">
              <label
                htmlFor="remember"
                className="text-sm font-semibold text-gray-700 "
              >
                アカウント名変更
              </label>
              <FiChevronRight className="my-2" />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2 py-3 text-center">
              <label
                htmlFor="remember"
                className="text-sm font-semibold text-gray-700 "
              >
                パスワード変更
              </label>
              <FiChevronRight className="my-2" />
            </div>
          </div>
        </div>
        <div>
          <label className="ml-6 pb-2 text-xs text-gray-500">その他</label>
          <div className="mx-3 flex flex-col rounded-xl bg-gray-50 px-3">
            <div className="flex flex-row items-center justify-between space-x-2 py-3 text-center">
              <label
                htmlFor="remember"
                className="text-sm font-semibold text-gray-700 "
              >
                サポートセンター
              </label>
              <FiChevronRight className="my-2" />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2 py-3 text-center">
              <label
                htmlFor="remember"
                className="text-sm font-semibold text-red-700 "
              >
                ログアウト
              </label>
              <FiChevronRight className="my-2" />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2 py-3 text-center">
              <label
                htmlFor="remember"
                className="text-sm font-semibold text-red-700 "
              >
                アカウント削除
              </label>
              <FiChevronRight className="my-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default setting
