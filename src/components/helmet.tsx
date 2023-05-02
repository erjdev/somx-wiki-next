import React from 'react'
import { SomHelmet } from '../../somdata/types/item'
import { notFound } from 'next/navigation';
import EquippableItemDetails from './equippable-item-details';
import EquippableItemLink from './equippable-item-link';

const Helmet: React.FC<{ helmet: SomHelmet }> = ({ helmet }) => {
  if (!helmet) {
    notFound();
  }

  return (
    <div className="flex flex-col p-4 gap-3 max-w-xl rounded-lg border-2 border-amber-900">
      <EquippableItemLink href={`/helmets/${helmet.id}`}>
        <img className="w-12 h-12" src={helmet.imageUrl} alt={helmet.name} />
        <div className="flex-grow flex flex-col gap-1">
          <p className="text-xl underline underline-offset-4 decoration-amber-500 group-hover:decoration-blue-400">{helmet.name}</p>
          <div className="flex flex-wrap justify-between italic font-light gap-x-2 gap-y-1 items-center text-sm">
            {helmet.requiredStats?.level && <p className="p-1 pl-0">Level {helmet.requiredStats?.level}</p>}
            <div className="flex gap-2 flex-wrap">
              {helmet.requiredStats?.speed && <p className="p-1 pl-0 text-amber-500">{helmet.requiredStats?.speed} Speed</p>}
              {helmet.durability && helmet.durability > 0 && <p className="p-1 pl-0 text-gray-300">{helmet.durability} Durability</p>}
            </div>
          </div>
        </div>
      </EquippableItemLink>

      <EquippableItemDetails {...helmet} />
    </div>
  )
}

export default Helmet;
