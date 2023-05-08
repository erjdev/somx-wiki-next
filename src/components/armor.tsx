import React from 'react';
import { SomArmor } from '../../somdata/types/item';
import { notFound } from 'next/navigation';
import EquippableItemDetails from './equippable-item-details';
import EquippableItemLink from './equippable-item-link';
import ItemContainer from './item-container';

const Armor: React.FC<{ armor: SomArmor, showBenefits?: boolean }> = ({ armor, showBenefits = true }) => {
  if (!armor) {
    notFound();
  }

  return (
    <ItemContainer className="border-slate-800">
      <EquippableItemLink href={`/armor/${armor.id}`}>
        <img className="w-12 h-12" src={armor.imageUrl} alt={armor.name} />
        <div className="flex-grow flex flex-col gap-1">
          <p className="text-xl underline underline-offset-4 decoration-slate-500 group-hover:decoration-blue-400">{armor.name}</p>
          <div className="flex flex-wrap justify-between italic font-light gap-2 items-center">
            {armor.requiredStats?.level && <p className="opacity-60 text-blue-400">Level {armor.requiredStats?.level}</p>}
            <div className="flex flex-wrap gap-x-4 items-center">
              {armor.requiredStats?.defense && <p className="text-slate-300 opacity-80">{armor.requiredStats?.defense} Defense</p>}
              {armor.requiredStats?.magic && armor.requiredStats?.magic > 0 && <p className="text-blue-700 opacity-80">{armor.requiredStats?.magic} Magic</p>}
              {armor.durability && armor.durability > 0 && <p className="text-gray-500">{armor.durability} Durability</p>}
            </div>
          </div>
        </div>
      </EquippableItemLink>

      <EquippableItemDetails {...armor} showBenefits={showBenefits} />
    </ItemContainer>
  )
}

export default Armor;
