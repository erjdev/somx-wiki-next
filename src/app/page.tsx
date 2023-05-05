import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SoMX Wiki',
  description: 'Wiki for Secrets of Mirage',
};

export default async function Home() {
  return (
    <div>
      Welcome.  Check out some stuff.
    </div>
  )
}
