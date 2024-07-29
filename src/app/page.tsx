import { Outfit } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

// Load the Outfit font
const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function Home() {
  return (

    <main className={`   flex min-h-screen flex-col items-center justify-center bg-black text-white ${outfit.className}`}>
      <h1 className="text-4xl mb-4">artes de ilusión™</h1>
      <p className='mb-4'>

        creative agency based in <span>
          <Link target='_blank' className='underline' href={'https://maps.app.goo.gl/P97ZiWDbT27kwnNr8'}>
            antalya
          </Link>
        </span>

      </p>
      <div className='flex flex-row space-x-4'>
        <Link className='hover:underline' href={'https://help.artesdeilusion.com'}>contact</Link>
        <Link className='hover:underline' href={'https://contact.artesdeilusion.com'}>support</Link>
      </div>

    </main>
  );
}
