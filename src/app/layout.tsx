import Navbar from '@/components/navbar'
import './globals.css'
import { Inter, Press_Start_2P } from 'next/font/google'
import { Metadata } from 'next';

const classicFont = Press_Start_2P({ 
  subsets: ['latin'],
  weight: "400",
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SoMX Wiki',
  description: 'Wiki for Secrets of Mirage',
  openGraph: {
    images: ['/pictures/bandana.png'],
  },
  metadataBase: new URL('https://somx.wiki'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${classicFont.className} bg-slate-950 text-slate-50`}>
        <div className="min-h-screen flex flex-col max-w-7xl mx-auto gap-12">
          <Navbar />
          <main className="flex-grow flex flex-col items-center justify-between px-8 pb-8">
            {children}
          </main>
          <footer className="mx-auto flex flex-col items-center font-extralight text-xs tracking-wider text-slate-400 gap-1 pb-2">
            <div>Made with ❤️ by <span className="font-medium">Slate</span></div>
            <div>Images and items from <a className="text-blue-400" href="https://www.secretsofmirage.com/" target="_blank" rel="noreferrer noopener">Secrets of Mirage (SoMX)</a></div>
          </footer>
        </div>
      </body>
    </html>
  )
}
