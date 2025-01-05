'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'

const AppHeader = () => {
  const todo_animation_variant: Variants = {
    initial: {
      scale: 0,
      display: 'none'
    },
    animate: {
      scale: 1,
      display: 'inline',
      transition: {
        duration: 150,
        delay: 0.5,
        type: 'tween'
      }
    }
  }


  return (
    <div className='font-extrabold text-white flex gap-5 flex-col items-center justify-center text-xl text-center'>
      <motion.span variants={todo_animation_variant} className='dark mt-5 text-3xl mx-1  w-min p-1 inline'>
        <p className='shine-text'>DueIt.ai</p>
      </motion.span>
      <div className='text-darkAccent text-base'>
        Turn your ideas into action. You've no idea what all you can achieve ( wink )
      </div>
    </div>
  )
}

export default AppHeader
