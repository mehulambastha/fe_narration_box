'use client'
import { NavItems } from '@/lib/types'
import { LucideHome, LucideSettings, LucideUserRound } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const EXCLUDED_PATHS = ['/login', '/login/queen', '/login/peasant']

const BottomAppNavigationBar = () => {
  // const router = useRouter()
  const fullPathname = usePathname()
  const pathBase = fullPathname.split('/')[1]
  const bottomBarReference = useRef<HTMLDivElement>(null)
  const [currenWidthOfBottomBar, setCurrentWidthOfBottomBar] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      if (bottomBarReference.current) {
        setCurrentWidthOfBottomBar(bottomBarReference.current.offsetWidth)
      }
    }

    updateWidth()

    window.addEventListener('resize', updateWidth)

    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  if (EXCLUDED_PATHS.includes(fullPathname)) {
    return null
  }

  const navItems: NavItems[] = [
    { label: 'Todos', icon: <LucideSettings />, path: 'todos' },
    { label: 'Home', icon: <LucideHome />, path: '' },
    { label: 'Analysis', icon: <LucideUserRound />, path: 'analysis' },
  ]
  const activeIndex = navItems.findIndex(item => item.path === pathBase || item.path === `/${fullPathname}`)

  return (
    <div ref={bottomBarReference} className='flex items-center bg-darkAccent sm:max-w-[380px] max-w-[640px] mx-auto justify-around w-full overflow-visible max-h-[150px] rounded-t-2xl py-3 fixed bottom-0 left-1/2 -translate-x-1/2'>
      <div
        className="absolute bg-white transition-all ease-out duration-200 rounded-full w-12 h-12"
        style={{
          transform: `translateX(${(activeIndex - 1) * currenWidthOfBottomBar / (navItems.length)}px)`, // Move circle based on active nav item index
        }}
      />
      {navItems.map((item) => (
        <Link
          href={`/${item.path}`}
          className={`relative rounded-full duration-300 p-3 flex items-center justify-center ${fullPathname === item.path || pathBase === item.path ? 'text-darkAccent scale-125' : 'text-white'}`}
          key={item.label}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default BottomAppNavigationBar
