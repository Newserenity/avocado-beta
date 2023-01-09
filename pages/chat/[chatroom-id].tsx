import BackButton from '@components/button/BackButton'
import Hamburger from '@components/button/hamburger'
import Message from '@components/component/Message'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const chatroom = [
  {
    chatroomId: 2341241231,
    userId: 1,
    messages: [
      {
        messageId: 123123,
        senderId: 1,
        message:
          'hellowfuweqbfuhellowfuweqbfuwebquvibuiwevbijqwebfjkewkfhkjbdvkjhellowfuweqbfuwebquvibuiwevbijqwebfjkewkfhkjbdvkjhellowfuweqbfuwebquvibuiwevbijqwebfjkewkfhkjbdvkjwebquvibuiwevbijqwebfjkewkfhkjbdvkj',
      },
      {
        messageId: 133123,
        senderId: 2,
        message: 'hellowfuweqbfuwebquvibuiwevbijqwebfjkewkfhkjbdvkj',
      },
      {
        messageId: 188823,
        senderId: 1,
        message: 'hellowfuwebquvibuiwevbijqwebfjkewkfhkjbdvkj',
      },
      {
        messageId: 123223,
        senderId: 2,
        message: 'left',
      },
      {
        messageId: 123223,
        senderId: 1,
        message: 'right',
      },
      {
        messageId: 153123,
        senderId: 1,
        message:
          'hellohello right wfuweqbfuwebquvibuiwevbijqwebfjkewkfhkjbdvkj',
      },
      {
        messageId: 128820,
        senderId: 2,
        message:
          'hello hello  left  wfuweqbfuwebquvibuiwevbijqwebfjkewkfhkjbdvkj',
      },
      {
        messageId: 123223,
        senderId: 1,
        message: 'right',
      },
      {
        messageId: 153123,
        senderId: 1,
        message:
          'hellohello right wfuweqbfuwebquvibuiwevbijqwebfjkewkfhkjbdvkj',
      },
      {
        messageId: 128820,
        senderId: 2,
        message:
          'hello hello  left  wfuweqbfuwebquvibuiwevbijqwebfjkewkfhkjbdvkj',
      },
      {
        messageId: 123223,
        senderId: 2,
        message: 'left',
      },
      {
        messageId: 123223,
        senderId: 1,
        message: 'right',
      },
      {
        messageId: 123223,
        senderId: 1,
        message: 'right',
      },
      {
        messageId: 153123,
        senderId: 1,
        message:
          'hellohello right wfuweqbfuwebquvibuiwevbijqwebfjkewkfhkjbdvkj',
      },
      {
        messageId: 128820,
        senderId: 2,
        message:
          'hello hello  left  wfuweqbfuwebquvibuiwevbijqwebfjkewkfhkjbdvkj',
      },
    ],
  },
]

function Chatroom() {
  const scrollRef = useRef<null | HTMLDivElement>(null)
  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      // behavior: 'smooth',
      block: 'end',
      inline: 'center',
    })
  }, [])

  return (
    <>
      <div ref={scrollRef}>
        <div className=" fixed inset-x-0 top-0 space-y-2 border-b bg-white px-3 py-3">
          <div className="flex flex-row items-center justify-between">
            <BackButton />
            <div className="space-y-5">
              <div className="flex flex-row items-center justify-between ">
                <div className="flex flex-row">
                  <div className="h-10 w-10 rounded-full bg-slate-500"></div>
                  <div className="pl-3">
                    <p className="text-sm font-semibold">One Kiss</p>
                    <div className="flex flex-row items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <p className="text-xs text-slate-400">オンライン</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Hamburger />
          </div>
          <div className=" flex w-full flex-row items-center justify-between pt-2">
            <div className="flex flex-row items-center">
              <div className="h-10 w-10 rounded-md bg-slate-500"></div>
              <div className="pl-3">
                <p className="text-md font-semibold">￥300,000</p>

                <p className="text-sm text-slate-400">iPhone 14 pro</p>
              </div>
            </div>
            <Link href="../mypage/profile/edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="space-y-3 px-3 pt-40">
          {chatroom.map((res) =>
            res.messages.map((message) => (
              <Message
                message={message.message}
                reversed={res.userId === message.senderId}
                key={message.messageId}
              />
            )),
          )}
        </div>
        <form className="bg-white p-3">
          <div className="relative mx-auto flex w-full  max-w-md items-center">
            <input
              type="text"
              placeholder="メッセージを入力"
              className="w-full rounded-full bg-slate-100  py-2 pl-4 placeholder-slate-400 focus:outline-none"
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <button className="flex items-center rounded-full bg-lime-500 px-2 text-sm text-white  ">
                &rarr;
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Chatroom
