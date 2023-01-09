import React, { SetStateAction, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import Image from 'next/image'
import { cls } from '@libs/client/utils'

interface SlideViewProps {
  image: { imageSrc: string }[]
  viewType: 'main' | 'products'
}

function SlideView({ image, viewType }: SlideViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? image.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === image.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: SetStateAction<number>) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <>
      <div
        className={cls(
          'group relative w-full',
          viewType === 'main' ? 'h-52' : 'aspect-square',
        )}
      >
        <Image
          src={`${image[currentIndex].imageSrc}`}
          alt={''}
          className="bg-cover bg-center object-cover duration-500"
          layout="fill"
          quality={100}
        />
        {/* Left Arrow */}
        <div className="absolute top-[50%] left-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
          <BsChevronCompactLeft onClick={prevSlide} size={15} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[50%] right-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
          <BsChevronCompactRight onClick={nextSlide} size={15} />
        </div>
      </div>
      <div className="flex justify-center py-1">
        {image.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-2xl"
          >
            {currentIndex == slideIndex ? (
              <RxDotFilled className="text-gray-900" />
            ) : (
              <RxDotFilled className="text-gray-300" />
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default SlideView
