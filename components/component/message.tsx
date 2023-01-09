import { cls } from '@libs/client/utils'
import React from 'react'

interface IMessageProps {
  message: string
  reversed?: boolean
  avatarUrl?: string
}

function Message({ message, avatarUrl, reversed }: IMessageProps) {
  return (
    <div
      className={cls(
        'flex items-start space-x-2',
        reversed ? 'ml-20 flex-row-reverse space-x-reverse' : 'mr-20',
      )}
    >
      <div
        className={cls(
          'text-s max-w-lg rounded-2xl p-2 text-gray-800',
          reversed ? 'bg-gray-100' : 'border border-gray-200',
        )}
      >
        <p className="break-all px-1">{message}</p>
      </div>
    </div>
  )
}

export default Message
