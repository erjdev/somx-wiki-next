import React from 'react'
import { SomHelmet } from '../../somdata/types/item'
import { StatsBlock } from './stat-block';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const Helmet: React.FC<{ helmet: SomHelmet }> = ({ helmet }) => {
  if (!helmet) {
    notFound();
  }

  return (
    <div className="flex flex-col p-4 gap-3 max-w-xl rounded-lg border-2 border-amber-900">
      <Link href={`/helmets/${helmet.id}`} className="flex items-center gap-4 p-2 flex-grow-0 rounded-lg bg-white/5 hover:bg-white/10">
        <img className="w-12 h-12" src={helmet.imageUrl} alt={helmet.name} />
        <div className="flex-grow flex flex-col gap-1">
          <p className="text-xl underline underline-offset-4 decoration-amber-500 group-hover:decoration-blue-400">{helmet.name}</p>
          <div className="flex justify-between italic font-light gap-2 items-center text-sm opacity-80">
            {helmet.requiredStats?.level && <p className="p-1 pl-0">Level {helmet.requiredStats?.level}</p>}
            {helmet.requiredStats?.speed && <p className="p-1 pl-0 text-amber-500">{helmet.requiredStats?.speed} Speed</p>}
            {helmet.durability && helmet.durability > 0 && <p className="p-1 pl-0 text-gray-300">{helmet.durability} Durability</p>}
          </div>
        </div>
      </Link>

      <div className="flex flex-col px-2 gap-3">
        {helmet.availableClasses && (
          <div className="flex flex-wrap gap-1 text-slate-500">
            <p>Usable by</p>
            {helmet.availableClasses.map(ac => <p className="px-3 text-slate-300 bg-white/10 rounded-full">{ac}</p>)}
          </div>
        )}
        {helmet.description && <p className="flex-wrap">{helmet.description}</p>}
        {helmet.benefitStats && <div className="flex flex-col px-2 gap-3 flex-wrap">
          <StatsBlock statBlock={helmet.benefitStats} title="Bonuses / Penalties" showIcons />
        </div>}
      </div>
    </div>
  )
}

export default Helmet;