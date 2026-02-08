import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className='relative h-screen w-full overflow-hidden text-white'>
      <div className='absolute inset-0 -z-10'>
        <Image
          src='/bg.jpg'
          alt='Office Background'
          fill
          className='object-cover'
          priority
        />

        <div className='absolute inset-0 bg-black/60' />
      </div>

      <nav className='flex items-center justify-between px-8 py-6 md:px-16'>
        <div className='border-3 border-white border-double px-3 py-1 text-xl font-bold tracking-tighter'>
          AA
        </div>

        <ul className='hidden space-x-8 text-sm font-medium md:flex'>
          <li>
            <Link
              href='/'
              className='transition-colors hover:text-gray-300'>
              Home
            </Link>
          </li>

          <li>
            <Link
              href='/about'
              className='text-gray-400 transition-colors hover:text-white'>
              About
            </Link>
          </li>
          <li>
            <Link
              href='/portfolio'
              className='text-gray-400 transition-colors hover:text-white'>
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href='/services'
              className='text-gray-400 transition-colors hover:text-white'>
              Services
            </Link>
          </li>
          <li>
            <Link
              href='/resume'
              className='text-gray-400 transition-colors hover:text-white'>
              Resume
            </Link>
          </li>
          <li>
            <Link
              href='/blog'
              className='text-gray-400 transition-colors hover:text-white'>
              Blog
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='text-gray-400 transition-colors hover:text-white'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className='flex h-[calc(100vh-80px)] flex-col items-center justify-center text-center px-4'>
        <h1 className='text-4xl font-bold leading-tight md:text-6xl lg:text-7xl'>
          I'm Ansa Asghar <br />A Full-Stack Developer
        </h1>
      </div>
    </section>
  );
}
