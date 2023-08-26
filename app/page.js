'use client'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div id='left-bar' className='bg-slate-200 h-screen'>
        <div id='avatar'>
          <Avatar>
            <AvatarImage
              src='https://i.kym-cdn.com/photos/images/original/002/214/693/624'
              alt='@shadcn'
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </main>
  )
}
