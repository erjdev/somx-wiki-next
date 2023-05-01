import React from 'react'
import { SomWeapon } from '../../somdata/types/item'
import { StatsBlock } from './stat-block';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const Weapon: React.FC<{ weapon: SomWeapon }> = ({ weapon }) => {
  if (!weapon) {
    notFound();
  }

  return (
    <div className="flex flex-col p-4 gap-3 max-w-xl rounded-lg drop-shadow-lg border-2 border-red-900">
      <Link href={`/weapons/${weapon.id}`} className="flex items-center gap-4 p-2 flex-grow-0 rounded-lg bg-white/5 hover:bg-white/10">
        <img className="w-12 h-12" src={weapon.imageUrl} alt={weapon.name} />
        <div className="flex-grow flex flex-col gap-1">
          <p className="text-xl underline underline-offset-4 decoration-red-500 group-hover:decoration-blue-400">{weapon.name}</p>
          <div className="flex justify-between italic font-light gap-2 items-center text-sm opacity-80">
            {weapon.requiredStats?.level && <p className="p-1 pl-0">Level {weapon.requiredStats?.level}</p>}
            {weapon.requiredStats?.strength && <p className="p-1 pl-0 text-red-500">
              {weapon.requiredStats?.strength} Strength
            </p>}
            {weapon.requiredStats?.magic && weapon.requiredStats?.magic > 0 && <p className="p-1 pl-0 text-blue-700">
              {weapon.requiredStats?.magic} Magic
            </p>}
            {weapon.durability && weapon.durability > 0 && <p className="p-1 pl-0 text-gray-300">
              {weapon.durability} Durability
            </p>}
          </div>
        </div>
      </Link>

      <div className="flex flex-col px-2 gap-3">
        {weapon.description && <p className="flex-wrap">{weapon.description}</p>}
        {weapon.availableClasses && <p className="flex-wrap">{weapon.availableClasses}</p>}
        {weapon.benefitStats && <div className="flex flex-col px-2 gap-3 flex-wrap">
          <StatsBlock statBlock={weapon.benefitStats} title="Bonuses / Penalties" showIcons />
        </div>}
      </div>
    </div>
  )
}

export default Weapon;
