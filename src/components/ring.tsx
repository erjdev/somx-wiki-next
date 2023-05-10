import React from 'react';
import { SomRing } from '../../somdata/types/item';
import { notFound } from 'next/navigation';
import EquippableItemDetails from './equippable-item-details';
import EquippableItemLink from './equippable-item-link';
import ItemContainer from './item-container';
import ItemStatus from './item-status';

const Ring: React.FC<{ ring: SomRing, showBenefits?: boolean }> = ({ ring, showBenefits = true }) => {
  if (!ring) notFound();

  return (
    <ItemContainer className="border-blue-900">
      <EquippableItemLink
        href={`/rings/${ring.id}`}
        name={ring.name}
        level={ring.requiredStats?.level}
        imageUrl={ring.imageUrl}
        underlineAccentClass='decoration-blue-700'
      >
        <ItemStatus {...ring} />
      </EquippableItemLink>
      <EquippableItemDetails {...ring} showBenefits={showBenefits} />
    </ItemContainer>
  );
}

export default Ring;
