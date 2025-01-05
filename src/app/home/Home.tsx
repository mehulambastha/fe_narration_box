import React from 'react'
import AppHeader from './components/AppHeader'
import AddTodoSection from './components/AddTodoSection'
import GenerateTodoSection from './components/GenerateTodoSection'

const Home = () => {
  return (
    <div className='w-full max-w-[340px] mx-auto'>
      <AppHeader />
      <AddTodoSection />
      <GenerateTodoSection />
    </div>
  )
}

export default Home
