'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '@/utils/cn'
import { CURRENCY_RATES } from '@/utils/constants'

export const Select = () => {
  const [closeSelect, setCloseSelect] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null)
  const selectRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
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
  }, [])

  const handleSelect = (currency: string) => {
    setSelectedCurrency(currency)
    setCloseSelect(false)
  }

  return (
    <div
      ref={selectRef}
      className={cn(
        'relative flex h-[3.25rem] w-full cursor-pointer flex-row items-center justify-between rounded-lg border border-solid border-blue-400 bg-blue-200 px-5 py-4 text-white-100',
        closeSelect && 'border-blue-700',
      )}
      onClick={() => setCloseSelect(!closeSelect)}
    >
      <label
        className={cn(
          'cursor-pointer text-blue-900',
          selectedCurrency ? 'text-white-100' : 'text-blue-900',
        )}
      >
        {selectedCurrency || 'Selecione a moeda'}
      </label>
      {closeSelect && (
        <ul className="absolute right-0 top-16 z-10 w-full max-w-[22rem] rounded-lg border border-solid border-blue-400 bg-blue-300">
          {CURRENCY_RATES.map((currency, index) => (
            <li
              key={`${currency.currency}-%${index}`}
              className={cn(
                'flex cursor-pointer flex-row items-center justify-between px-5 py-3',
                selectedCurrency === currency.currency
                  ? 'text-white-100'
                  : 'text-blue-900',
              )}
              onClick={() => handleSelect(currency.currency)}
            >
              {currency.currency}
              {selectedCurrency === currency.currency && (
                <Check className="size-5 text-white-100" />
              )}
            </li>
          ))}
        </ul>
      )}
      <ChevronDown
        className={cn(
          'absolute right-4 size-5 text-blue-900 transition-transform duration-200',
          closeSelect && 'rotate-180 text-blue-700',
          selectedCurrency ? 'text-white-100' : 'text-blue-900',
        )}
      />
    </div>
  )
}
