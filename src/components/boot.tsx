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
      <EquippableItemLink
        href={`/boots/${boot.id}`}
        name={boot.name}
        level={boot.requiredStats?.level}
        imageUrl={boot.imageUrl}
        underlineAccentClass='decoration-blue-700'
      >
        {boot.durability && boot.durability > 0 && <p className="text-gray-300">{boot.durability} Durability</p>}
      </EquippableItemLink>
      <EquippableItemDetails {...boot} showBenefits={showBenefits} />
    </ItemContainer>
  )
}

export default Boot;
