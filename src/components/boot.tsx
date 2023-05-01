import React from 'react';
import { SomBoot } from '../../somdata/types/item';
import { notFound } from 'next/navigation';
import EquippableItemDetails from './equippable-item-details';
import EquippableItemLink from './equippable-item-link';

const Boot: React.FC<{ boot: SomBoot }> = ({ boot }) => {
  if (!boot) {
    notFound();
  }

  return (
    <div className="flex flex-col p-4 gap-3 max-w-xl rounded-lg border-2 border-blue-900">
      <EquippableItemLink href={`/boots/${boot.id}`}>
        <img className="w-12 h-12" src={boot.imageUrl} alt={boot.name} />
        <div className="flex-grow flex flex-col gap-1">
          <p className="text-xl underline underline-offset-4 decoration-blue-700">{boot.name}</p>
          <div className="flex justify-between italic font-light gap-2 items-center text-sm opacity-80">
            {boot.requiredStats?.level && <p className="p-1 pl-0">Level {boot.requiredStats?.level}</p>}
            <div className="flex gap-2">
              {boot.durability && boot.durability > 0 && <p className="p-1 pl-0 text-gray-300">{boot.durability} Durability</p>}
            </div>
          </div>
        </div>
      </EquippableItemLink>

      <EquippableItemDetails {...boot} />
    </div>
  )
}

export default Boot;
