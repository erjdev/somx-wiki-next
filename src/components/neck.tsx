import React from 'react';
import { SomNeck } from '../../somdata/types/item';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import EquippableItemDetails from './equippable-item-details';
import EquippableItemLink from './equippable-item-link';

const Neck: React.FC<{ neck: SomNeck }> = ({ neck }) => {
  if (!neck) notFound();

  return (
    <div className="flex flex-col p-4 gap-3 max-w-xl rounded-lg drop-shadow-lg border-2 border-blue-900">
      <EquippableItemLink href={`/necks/${neck.id}`}>
        <img className="w-12 h-12" src={neck.imageUrl} alt={neck.name} />
        <div className="flex-grow flex flex-col gap-1">
          <p className="text-xl underline underline-offset-4 decoration-blue-700">{neck.name}</p>
          <div className="flex flex-wrap justify-between italic font-light gap-x-2 gap-y-1 items-center text-sm">
            {neck.requiredStats?.level && <p className="opacity-80 p-1 pl-0">Level {neck.requiredStats?.level}</p>}
            <div className="flex gap-2 flex-wrap">
              {neck.unique && <p className="rounded-full bg-slate-800 px-3 tracking-wider text-sm opacity-80">Unique</p>}
              {neck.bindOnEquip && <p className="rounded-full bg-red-800 px-3 tracking-wider text-sm opacity-80">BoE</p>}
              {neck.bindOnPickup && <p className="rounded-full bg-red-800 px-3 tracking-wider text-sm opacity-80">BoP</p>}
              {neck.showsHealth && <p className="rounded-full bg-blue-600 px-3 tracking-wider text-sm opacity-80">Oracle</p>}
            </div>
          </div>
        </div>
      </EquippableItemLink>

      <EquippableItemDetails {...neck} />
    </div>
  );
}

export default Neck;
