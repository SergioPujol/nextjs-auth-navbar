'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation'

const Logo = () => {

    const router = useRouter();

    return (
      <Image 
          alt='Logo'
          className='cursor-pointer'
          width={100}
          height={100}
          src='/next.svg'
          onClick={() => router.push('/')}
      />
    )
}

export default Logo