import React from 'react'
import { SomShield } from '../../somdata/types/item'
import { notFound } from 'next/navigation';
import EquippableItemDetails from './equippable-item-details';
import EquippableItemLink from './equippable-item-link';
import ItemContainer from './item-container';

const Shield: React.FC<{ shield: SomShield, showBenefits?: boolean }> = ({ shield, showBenefits = true }) => {
  if (!shield) {
    notFound();
  }

  return (
    <ItemContainer className="border-gray-900">
      <EquippableItemLink href={`/shields/${shield.id}`}>
        <img className="w-12 h-12" src={shield.imageUrl} alt={shield.name} />
        <div className="flex-grow flex flex-col gap-1">
          <p className="text-xl underline underline-offset-4 decoration-gray-500 group-hover:decoration-blue-400">{shield.name}</p>
          <div className="flex flex-wrap justify-between italic font-light gap-x-2 gap-y-1 items-center text-sm">
            {shield.requiredStats?.level && <p className="">Level {shield.requiredStats?.level}</p>}
            <p className="text-gray-500">+{shield.blockPercent}% Block</p>
            {shield.durability && shield.durability > 0 && <p className="p-1 pl-0 text-gray-300">{shield.durability} Durability</p>}
            {shield.unique && <p className="rounded-full bg-slate-800 px-3 tracking-wider text-sm opacity-80">Unique</p>}
          </div>
        </div>
      </EquippableItemLink>

      <EquippableItemDetails {...shield} showBenefits={showBenefits} />
    </ItemContainer>
  )
}

export default Shield;
