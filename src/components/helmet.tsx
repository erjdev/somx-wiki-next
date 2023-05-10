import React from 'react'
import { SomHelmet } from '../../somdata/types/item'
import { notFound } from 'next/navigation';
import EquippableItemDetails from './equippable-item-details';
import EquippableItemLink from './equippable-item-link';
import ItemContainer from './item-container';
import ItemStatus from './item-status';

const Helmet: React.FC<{ helmet: SomHelmet, showBenefits?: boolean }> = ({ helmet, showBenefits = true }) => {
  if (!helmet) {
    notFound();
  }

  return (
    <ItemContainer className="border-amber-900">
      <EquippableItemLink
        href={`/helmets/${helmet.id}`}
        name={helmet.name}
        level={helmet.requiredStats?.level}
        imageUrl={helmet.imageUrl}
        underlineAccentClass='decoration-amber-500'
      >
        {helmet.requiredStats?.speed && <p className="text-amber-500">{helmet.requiredStats?.speed} Speed</p>}
        {helmet.durability && helmet.durability > 0 && <p className="text-gray-300">{helmet.durability} Durability</p>}
        <ItemStatus {...helmet} />
      </EquippableItemLink>

      <EquippableItemDetails {...helmet} showBenefits={showBenefits} />
    </ItemContainer>
  )
}

export default Helmet;
