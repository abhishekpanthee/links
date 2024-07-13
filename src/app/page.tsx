import Image from 'next/image'
import { FiBook } from 'react-icons/fi'
import {
  SiDevdotto,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiReddit,
  SiX,
  SiYoutube
} from 'react-icons/si'

import Spotlight from '@/components/spotlight'

import PrimaryLinks from './primary-links'

const links = [
  {
    icon: <FiBook className='text-zinc-300' />,
    title: 'Blog',
    url: 'https://abhishekpanthee.com.np/posts'
  },
  {
    icon: <SiLinkedin className='text-zinc-300' />,
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/abhishek-panthee/'
  },
  {
    icon: <SiGithub className='text-zinc-300' />,
    title: 'Github',
    url: 'https://github.com/abhishekpanthee'
  },
  {
    icon: <SiFacebook className='text-zinc-300' />,
    title: 'Facebook',
    url: 'https://www.facebook.com/abhishek.panthee.7/'
  },
  {
    icon: <SiInstagram className='text-zinc-300' />,
    title: 'Instagram',
    url: 'https://www.instagram.com/abhishek.panthee/'
  },
  {
    icon: <SiX className='text-zinc-300' />,
    title: 'Twitter',
    url: 'https://x.com/AbhishekPanthee'
  },
  {
    icon: <SiYoutube className='text-zinc-300' />,
    title: 'YouTube',
    url: 'https://www.youtube.com/@abhishekpanthee1'
  },
  {
    icon: <SiReddit className='text-zinc-300' />,
    title: 'Reddit',
    url: 'https://www.reddit.com/user/abhishek-panthee/'
  },
  {
    icon: <SiDevdotto className='text-zinc-300' />,
    title: 'Dev.to',
    url: 'https://dev.to/abhishekpanthee'
  }
  
]

const HomePage = () => {
  return (
    <>
      <div className='relative mx-auto flex flex-col items-center justify-center gap-4 pb-10 pt-24'>
        <Spotlight className='-top-4 left-56' />
        <Image
          src='https://abhishekpanthee.com.np/assets/logo/logo.png'
          width={90}
          height={90}
          alt='Logo'
          className='rounded-full'
          priority
        />
        <h1 className='text-xl font-semibold'>Abhishek Panthee</h1>
        <p className='text-[#a1a1a1]'>Cyber-Security Analyst</p>
      </div>
      <PrimaryLinks />
      <div className='flex flex-col gap-4 py-3'>
        {links.map((link) => {
          const { icon, title, url } = link

          return (
            <a
              key={url}
              href={url}
              className='relative flex h-14 w-full items-center justify-center rounded-xl border border-zinc-700 bg-[#151414] px-8 py-4 transition-colors duration-300 hover:border-zinc-500'
              target='_blank'
              rel='noopener, noreferrer'
            >
              <div className='absolute left-8'>{icon}</div>
              <div className='text-zinc-100'>{title}</div>
            </a>
          )
        })}
      </div>
    </>
  )
}

export default HomePage
