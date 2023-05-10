import React from 'react'
import Link from 'next/link';

const EquippableItemLink: React.FC<React.PropsWithChildren<{
  href: string,
  name: string,
  level?: number,
  imageUrl: string,
  underlineAccentClass?: string,
}>> = ({
  children,
  href,
  name,
  level,
  imageUrl,
  underlineAccentClass = "decoration-blue-400",
}) => {
  return (
    <Link
      href={href}
      className={`flex flex-col gap-4 p-3 flex-grow-0 rounded-lg bg-white/5 hover:bg-white/10 text-xs`}>
      <div className="flex flex-row gap-3">
        {imageUrl && <img src={imageUrl} alt={name} className="flex-shrink-0 w-12 h-12" />}
        <div className="flex-grow flex flex-col gap-1">
          <p className={`text-base underline underline-offset-4 ${underlineAccentClass} group-hover:decoration-blue-400`}>{name}</p>
          <div className="flex flex-wrap justify-between italic font-light gap-4 items-center">
            {level && <p className="text-blue-400">Level {level}</p>}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center items-center">
        {children}
      </div>
    </Link>
  )
}

export default EquippableItemLink;
