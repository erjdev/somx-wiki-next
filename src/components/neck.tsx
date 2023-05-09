import React from 'react';
import { SomNeck } from '../../somdata/types/item';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import EquippableItemDetails from './equippable-item-details';
import EquippableItemLink from './equippable-item-link';
import ItemContainer from './item-container';

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
        {neck.unique && <p className="rounded-full bg-slate-800 px-3 tracking-wider opacity-80">Unique</p>}
        {neck.bindOnEquip && <p className="rounded-full bg-red-800 px-3 tracking-wider opacity-80">BoE</p>}
        {neck.bindOnPickup && <p className="rounded-full bg-red-800 px-3 tracking-wider opacity-80">BoP</p>}
        {neck.showsHealth && <p className="rounded-full bg-blue-600 px-3 tracking-wider opacity-80">Oracle</p>}
      </EquippableItemLink>

      <EquippableItemDetails {...neck} showBenefits={showBenefits} />
    </ItemContainer>
  );
}

export default Neck;
