import Image from 'next/image'
import { Card } from '@/components/card'
import logo from '@/assets/logo.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 px-4 py-16">
      <Image src={logo} alt="Logo Convert" width={138} height={29} />
      <Card />
    </main>
  )
}
