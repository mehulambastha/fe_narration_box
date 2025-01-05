import { Button } from '@/components/ui/button'
import { LucideArrowRight } from 'lucide-react'
import React from 'react'

const AddTodoSection = () => {
  return (
    <div className='bg-darkAccent/30 my-4 backdrop-blur py-5 px-5 rounded-2xl w-full text-white'>
      Create new todo from here or click the + icon in bottom right corner.
      <Button className='block w-11/12 mt-2 mx-auto'>
        Add todo <LucideArrowRight className='inline ml-1' />
      </Button>
    </div>
  )
}

export default AddTodoSection
