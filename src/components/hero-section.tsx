'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Globe from '@/components/globe';
import Particles from '@/components/particles';
import { Image } from '@/components/ui/image';

export const HeroSection = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section className='w-full min-h-screen flex flex-col justify-center items-center'>
      <div className='w-full flex flex-col items-center justify-center gap-4 mx-auto text-center mb-1'>
        <Image
          height={200}
          width={200}
          src='/bna-cyberpunk.png'
          alt={'BNA'}
          className='rounded-full w-72 h-72'
        />

        <h1 className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-6xl font-black leading-none text-transparent dark:from-white dark:to-slate-900/10'>
          Ahmed BNA
        </h1>
      </div>

      {/* <div className='relative flex h-full w-full max-w-full items-center justify-center overflow-hidden rounded-lg  pb-40 md:pb-60'>
        <Globe className='top-6' />
        <div className='pointer-events-none absolute inset-0 h-full ' />
      </div> */}

      <Particles
        className='absolute inset-0 -z-10'
        quantity={80}
        color={resolvedTheme === 'light' ? '#000000' : '#FFFFFF'}
      />
    </section>
  );
};
