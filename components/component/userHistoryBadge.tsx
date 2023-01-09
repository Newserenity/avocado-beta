import React from 'react'

interface BadgeProps {
  value: number | string
  title: string
}

function UserHistoryBadge({ title, value }: BadgeProps) {
  return (
    <>
      <div className="aspect-square h-[4.5rem] items-start rounded-xl bg-slate-100 text-center">
        <div className="my-4">
          <p className="text-sm text-gray-500">{title}</p>
          <p className="font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </>
  )
}

export default UserHistoryBadge
