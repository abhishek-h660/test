import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='inline-flex'>
      <Button  Size={'Large'} Emphasis={'High'} Enabled={'Yes'} Icon={'None'} Label='Label' />
      <Button  Size={'Medium'} Emphasis={'High'} Enabled={'Yes'} Icon={'Trailing'} Label='Label' />
      <Button  Size={'Small'} Emphasis={'High'} Enabled={'Yes'} Icon={'None'} Label='Label' />

    </div>
  )
}
