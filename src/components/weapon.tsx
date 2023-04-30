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
          <div className="flex justify-between italic font-light gap-2 items-center text-sm">
            {weapon.requiredStats?.level && <p className="opacity-80 p-1 pl-0">Level: {weapon.requiredStats?.level}</p>}
            {weapon.requiredStats?.strength && <p className="opacity-80 p-1 pl-0 text-red-300">
              {weapon.requiredStats?.strength} Strength
            </p>}
            {weapon.requiredStats?.magic && weapon.requiredStats?.magic > 0 && <p className="opacity-80 p-1 pl-0 text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              {weapon.requiredStats?.magic} Magic
            </p>}
            {weapon.durability && weapon.durability > 0 && <p className="opacity-80 p-1 pl-0 text-gray-300">
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
