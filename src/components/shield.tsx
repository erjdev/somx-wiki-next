import React from 'react'
import { SomShield } from '../../somdata/types/item'
import { notFound } from 'next/navigation';
import EquippableItemDetails from './equippable-item-details';
import EquippableItemLink from './equippable-item-link';
import ItemContainer from './item-container';
import ItemStatus from './item-status';

const Shield: React.FC<{ shield: SomShield, showBenefits?: boolean }> = ({ shield, showBenefits = true }) => {
  if (!shield) {
    notFound();
  }

  return (
    <ItemContainer className="border-gray-900">
      <EquippableItemLink
        href={`/shields/${shield.id}`}
        name={shield.name}
        level={shield.requiredStats?.level}
        imageUrl={shield.imageUrl}
        underlineAccentClass='decoration-gray-500'
      >
        <p className="text-gray-500">+{shield.blockPercent}% Block</p>
        {shield.durability && shield.durability > 0 && <p className="text-gray-500">{shield.durability} Durability</p>}
        <ItemStatus {...shield} />
      </EquippableItemLink>
      <EquippableItemDetails {...shield} showBenefits={showBenefits} />
    </ItemContainer>
  )
}

export default Shield;
