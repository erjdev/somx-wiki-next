import React from 'react';
import { SomWeapon } from '../../somdata/types/item';
import { notFound } from 'next/navigation';
import EquippableItemDetails from './equippable-item-details';
import EquippableItemLink from './equippable-item-link';

const Weapon: React.FC<{ weapon: SomWeapon }> = ({ weapon }) => {
  if (!weapon) {
    notFound();
  }

  return (
    <div className="flex flex-col p-4 gap-3 max-w-xl rounded-lg drop-shadow-lg border-2 border-red-900">
      <EquippableItemLink href={`/weapons/${weapon.id}`}>
        <img className="w-12 h-12" src={weapon.imageUrl} alt={weapon.name} />
        <div className="flex-grow flex flex-col gap-1">
          <p className="text-xl underline underline-offset-4 decoration-red-500 group-hover:decoration-blue-400">{weapon.name}</p>
          <div className="flex flex-wrap justify-between italic font-light gap-x-2 gap-y-1 items-center text-sm">
            {weapon.requiredStats?.level && <p className="p-1 pl-0">Level {weapon.requiredStats?.level}</p>}
            {weapon.requiredStats?.strength && <p className="p-1 pl-0 text-red-500">{weapon.requiredStats?.strength} Strength</p>}
            {weapon.durability && weapon.durability > 0 && <p className="p-1 pl-0 text-gray-300">{weapon.durability} Durability</p>}
          </div>
        </div>
      </EquippableItemLink>

      <EquippableItemDetails {...weapon} />
    </div>
  )
}

export default Weapon;
