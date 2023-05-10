import React from 'react';
import { SomNeck } from '../../somdata/types/item';
import { notFound } from 'next/navigation';
import EquippableItemDetails from './equippable-item-details';
import EquippableItemLink from './equippable-item-link';
import ItemContainer from './item-container';
import ItemStatus from './item-status';

const Neck: React.FC<{ neck: SomNeck, showBenefits?: boolean }> = ({ neck, showBenefits = true }) => {
  if (!neck) notFound();

  return (
    <ItemContainer className="border-blue-900">
      <EquippableItemLink
        href={`/necks/${neck.id}`}
        name={neck.name}
        level={neck.requiredStats?.level}
        imageUrl={neck.imageUrl}
        underlineAccentClass='decoration-blue-700'
      >
        <ItemStatus {...neck} />
      </EquippableItemLink>
      <EquippableItemDetails {...neck} showBenefits={showBenefits} />
    </ItemContainer>
  );
}

export default Neck;
