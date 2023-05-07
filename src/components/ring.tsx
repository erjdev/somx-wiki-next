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
      <EquippableItemLink href={`/rings/${ring.id}`}>
        <img className="w-12 h-12" src={ring.imageUrl} alt={ring.name} />
        <div className="flex-grow flex flex-col gap-1">
          <p className="text-xl underline underline-offset-4 decoration-blue-700">{ring.name}</p>
          <div className="flex flex-wrap justify-between italic font-light gap-x-2 gap-y-1 items-center text-sm">
            {ring.requiredStats?.level && <p className="opacity-80 p-1 pl-0">Level {ring.requiredStats?.level}</p>}
            <div className="flex gap-2 flex-wrap">
              {ring.unique && <p className="rounded-full bg-slate-800 px-3 tracking-wider text-sm opacity-80">Unique</p>}
              {ring.bindOnEquip && <p className="rounded-full bg-red-800 px-3 tracking-wider text-sm opacity-80">BoE</p>}
              {ring.bindOnPickup && <p className="rounded-full bg-red-800 px-3 tracking-wider text-sm opacity-80">BoP</p>}
              {ring.showsHealth && <p className="rounded-full bg-blue-600 px-3 tracking-wider text-sm opacity-80">Oracle</p>}
            </div>
          </div>
        </div>
      </EquippableItemLink>

      <EquippableItemDetails {...ring} showBenefits={showBenefits} />
    </ItemContainer>
  );
}

export default Ring;
