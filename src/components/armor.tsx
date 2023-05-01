import React from 'react';
import { SomArmor } from '../../somdata/types/item';
import { notFound } from 'next/navigation';
import EquippableItemDetails from './equippable-item-details';
import EquippableItemLink from './equippable-item-link';

const Armor: React.FC<{ armor: SomArmor }> = ({ armor }) => {
  if (!armor) {
    notFound();
  }

  return (
    <div className="flex flex-col p-4 gap-3 max-w-xl rounded-lg border-2 border-slate-800">
      <EquippableItemLink href={`/armor/${armor.id}`}>
        <img className="w-12 h-12" src={armor.imageUrl} alt={armor.name} />
        <div className="flex-grow flex flex-col gap-1">
          <p className="text-xl underline underline-offset-4 decoration-slate-500 group-hover:decoration-blue-400">{armor.name}</p>
          <div className="flex justify-between italic font-light gap-2 items-center text-sm opacity-80">
            {armor.requiredStats?.defense && <p className="p-1 pl-0 text-slate-500">
            {armor.requiredStats?.level && <p className="p-1 pl-0">Level {armor.requiredStats?.level}</p>}
              {armor.requiredStats?.defense} Defense
            </p>}
            {armor.requiredStats?.magic && armor.requiredStats?.magic > 0 && <p className="p-1 pl-0 text-blue-700">
              {armor.requiredStats?.magic} Magic
            </p>}
            {armor.durability && armor.durability > 0 && <p className="p-1 pl-0 text-gray-300">
              {armor.durability} Durability
            </p>}
          </div>
        </div>
      </EquippableItemLink>

      <EquippableItemDetails {...armor} />
    </div>
  )
}

export default Armor;
