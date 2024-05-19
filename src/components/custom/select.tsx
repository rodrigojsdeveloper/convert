'use client'
// interface SelectProps {}

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/utils/cn'

export const Select = () => {
  const [closeSelect, setCloseSelect] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    setCloseSelect(true)
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setCloseSelect(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <div
      ref={selectRef}
      className={cn(
        'relative flex h-[3.25rem] w-full cursor-pointer flex-row items-center justify-between rounded-lg border border-solid border-blue-400 bg-blue-200 px-5 py-4 text-white-100',
        closeSelect && 'border-blue-700',
      )}
    >
      <label className="cursor-pointer text-blue-900">Selecione a moeda</label>
      {closeSelect && (
        <ul className="absolute right-0 top-16 z-10 h-[14.75rem] w-full max-w-[22rem] rounded-lg border border-solid border-blue-400 bg-blue-300"></ul>
      )}
      <ChevronDown
        className={cn(
          'absolute right-4 size-5 text-blue-900 transition-transform duration-200',
          closeSelect && 'rotate-180 text-blue-700',
        )}
      />
    </div>
  )
}
