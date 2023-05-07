import React from 'react';
import { SomBoot } from '../../somdata/types/item';
import { notFound } from 'next/navigation';
import EquippableItemDetails from './equippable-item-details';
import EquippableItemLink from './equippable-item-link';
import ItemContainer from './item-container';

const Boot: React.FC<{ boot: SomBoot, showBenefits?: boolean }> = ({ boot, showBenefits = true }) => {
  if (!boot) {
    notFound();
  }

  return (
    <ItemContainer className="border-blue-900">
      <EquippableItemLink href={`/boots/${boot.id}`}>
        <img className="w-12 h-12" src={boot.imageUrl} alt={boot.name} />
        <div className="flex-grow flex flex-col gap-1">
          <p className="text-xl underline underline-offset-4 decoration-blue-700">{boot.name}</p>
          <div className="flex flex-wrap justify-between italic font-light gap-x-2 gap-y-1 items-center text-sm">
            {boot.requiredStats?.level && <p className="p-1 pl-0">Level {boot.requiredStats?.level}</p>}
            {boot.durability && boot.durability > 0 && <p className="p-1 pl-0 text-gray-300">{boot.durability} Durability</p>}
          </div>
        </div>
      </EquippableItemLink>

      <EquippableItemDetails {...boot} showBenefits={showBenefits} />
    </ItemContainer>
  )
}

export default Boot;
