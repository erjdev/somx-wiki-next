import React from 'react'
import { SomWeapon } from '../../somdata/types/item'
import { StatsBlock } from './stat-block';
import Link from 'next/link';

const Weapon: React.FC<{ weapon: SomWeapon }> = ({ weapon: weapon }) => {
  return (
    <div className="flex flex-col p-4 gap-3 max-w-xl rounded-lg">
      <div className="flex items-center gap-4 flex-grow-0">
        <img className="w-12 h-12" src={weapon.imageUrl} alt={weapon.name} />
        <div className="flex flex-col gap-1">
          <Link className="cursor-pointer" href={`/weapons/${weapon.id}`}>
            <p className="text-xl underline underline-offset-4 decoration-blue-700">{weapon.name}</p>
          </Link>
          <div className="flex justify-between italic font-light gap-2 items-center text-sm opacity-80">
            {weapon.requiredStats?.level && <p className="p-1 pl-0">Level: {weapon.requiredStats?.level}</p>}
            {weapon.requiredStats?.strength && <p className="p-1 pl-0 text-red-300">
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
      </div>

      <div className="flex flex-col px-2 gap-3">
        <p className="flex-wrap">{weapon.description}</p>
        <p className="flex-wrap">{weapon.availableClasses}</p>
        <div className="flex flex-col px-2 gap-3 flex-wrap">
          {weapon.benefitStats && <StatsBlock statBlock={weapon.benefitStats} title="Bonuses / Penalties" />}
          {weapon.requiredStats && <StatsBlock statBlock={weapon.requiredStats} title="Required Stats" />}
        </div>
      </div>
    </div>
  )
}

export default Weapon;
