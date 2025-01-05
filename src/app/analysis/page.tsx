'use client'
import React, { useEffect, useRef } from 'react'
import { toast } from 'sonner'

const Page = () => {
  const hasShownToast = useRef(false)

  useEffect(() => {
    if (!hasShownToast.current) {
      toast.success("Works")
      hasShownToast.current = true
    }
  }, [])
  return (
    <div>Page</div>
  )
}

export default Page
