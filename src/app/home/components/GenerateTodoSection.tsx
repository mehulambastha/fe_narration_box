'use client'
import GenerateTodoDialog from '@/components/shared/GenerateTodoDialog'
import GenerateTodoDisclaimer from '@/components/shared/GenerateTodoDisclaimer'
import LottieIcon from '@/components/shared/LottieEmoticon'
import React, { use, useEffect } from 'react'

const GenerateTodoSection = () => {
  useEffect(() => {
    localStorage.setItem("genTodoDisclaimer", "true")
  })

  const isFirstTime = localStorage.getItem("genTodoDisclaimer")
  console.log("FIRST TIME : ", isFirstTime)

  return (
    <div className='w-full bg-darkAccent/20 flex flex-col items-center justify-evenly rounded-2xl'>
      <div className='bg-accent flex items-center justify-center gap-2 copper-shine w-full py-4 text-2xl'>
        <p className='shine-text text-center font-extrabold'>
          Generate
        </p>
        <LottieIcon size={8} iconType='sparkle' />
      </div>
      <div className='w-full px-5 flex flex-col bg-pink-50'>
        Generate todos by describing your desired goal!
        {
          isFirstTime === 'true' ? (
            <GenerateTodoDisclaimer />
          ) : (
            <GenerateTodoDialog isFirstTime={false} />
          )
        }
      </div>
    </div>
  )
}

export default GenerateTodoSection
