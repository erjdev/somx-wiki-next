import React from 'react';
import { SomRing } from '../../somdata/types/item';
import { notFound } from 'next/navigation';
import EquippableItemDetails from './equippable-item-details';
import EquippableItemLink from './equippable-item-link';
import ItemContainer from './item-container';

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
        {ring.unique && <p className="rounded-full bg-slate-800 px-3 tracking-wider opacity-80">Unique</p>}
        {ring.bindOnEquip && <p className="rounded-full bg-red-800 px-3 tracking-wider opacity-80">BoE</p>}
        {ring.bindOnPickup && <p className="rounded-full bg-red-800 px-3 tracking-wider opacity-80">BoP</p>}
        {ring.showsHealth && <p className="rounded-full bg-blue-600 px-3 tracking-wider opacity-80">Oracle</p>}
      </EquippableItemLink>

      <EquippableItemDetails {...ring} showBenefits={showBenefits} />
    </ItemContainer>
  );
}

export default Ring;
