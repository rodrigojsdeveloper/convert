'use client'

import { useState } from 'react'
import { CustomInput, CustomSelect } from './custom'

export const Card = () => {
  const [disabled, setDisabled] = useState<boolean>(true)

  return (
    <section className="flex h-96 w-full max-w-[30rem] items-center justify-center rounded-3xl border border-solid border-blue-500 bg-blue-300 px-6">
      <form className="flex w-full max-w-[22rem] flex-col gap-12">
        <div className="flex flex-col gap-5">
          <CustomInput />
          <CustomSelect />
        </div>
        <button
          type="submit"
          disabled={disabled}
          className="h-[3.25rem] w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white-100 duration-200 hover:bg-blue-700 disabled:bg-blue-600 disabled:opacity-50"
        >
          Converter em reais
        </button>
      </form>
    </section>
  )
}
