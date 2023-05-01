import React from 'react'
import Link from 'next/link';

const EquippableItemLink: React.FC<React.PropsWithChildren<{ href: string }>> = ({ href, children }) => {
  return (
    <Link href={href} className="flex items-center gap-4 p-2 flex-grow-0 rounded-lg bg-white/5 hover:bg-white/10">
      {children}
    </Link>
  )
}

export default EquippableItemLink;
