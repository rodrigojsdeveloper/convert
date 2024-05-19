import { PropsWithChildren } from 'react'
import { Input } from './input'
import { Select } from './select'

interface CustomProps {
  label: string
}

export const Custom = ({ label, children }: PropsWithChildren<CustomProps>) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="text-xs uppercase text-blue-900">{label}</label>
      {children}
    </div>
  )
}

export const CustomInput = () => {
  return (
    <Custom label="valor">
      <Input />
    </Custom>
  )
}

export const CustomSelect = () => {
  return (
    <Custom label="moedas">
      <Select />
    </Custom>
  )
}
