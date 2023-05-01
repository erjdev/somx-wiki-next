import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  return (
    <div>
      Welcome.  Check out some stuff.
    </div>
  )
}
