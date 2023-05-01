import React from 'react';
import { SomBoot } from '../../somdata/types/item';
import { StatsBlock } from './stat-block';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const Boot: React.FC<{ boot: SomBoot }> = ({ boot }) => {
  if (!boot) {
    notFound();
  }

  return (
    <div className="flex flex-col p-4 gap-3 max-w-xl rounded-lg border-2 border-blue-900">
      <Link href={`/helmets/${boot.id}`} className="flex items-center gap-4 p-2 flex-grow-0 rounded-lg bg-white/5 hover:bg-white/10">
        <img className="w-12 h-12" src={boot.imageUrl} alt={boot.name} />
        <div className="flex-grow flex flex-col gap-1">
          <p className="text-xl underline underline-offset-4 decoration-blue-700">{boot.name}</p>
          <div className="flex justify-between italic font-light gap-2 items-center text-sm opacity-80">
            {boot.requiredStats?.level && <p className="p-1 pl-0">Level {boot.requiredStats?.level}</p>}
            {boot.durability && boot.durability > 0 && <p className="p-1 pl-0 text-gray-300">{boot.durability} Durability</p>}
          </div>
        </div>
      </Link>

      <div className="flex flex-col px-2 gap-3">
        {boot.availableClasses && (
          <div className="flex flex-wrap gap-1 text-slate-500">
            <p>Usable by</p>
            {boot.availableClasses.map(ac => <p key={ac} className="px-3 text-slate-300 bg-white/10 rounded-full">{ac}</p>)}
          </div>
        )}
        {boot.description && <p className="flex-wrap">{boot.description}</p>}
        {boot.benefitStats && <div className="flex flex-col px-2 gap-3 flex-wrap">
          <StatsBlock statBlock={boot.benefitStats} title="Bonuses / Penalties" showIcons />
        </div>}
      </div>
    </div>
  )
}

export default Boot;
