import React from 'react';
import { SomRing } from '../../somdata/types/item';
import { StatsBlock } from './stat-block';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const Ring: React.FC<{ ring: SomRing }> = ({ ring }) => {
  if (!ring) notFound();

  return (
    <div className="flex flex-col p-4 gap-3 max-w-xl rounded-lg drop-shadow-lg border-2 border-blue-900">
      <Link href={`/rings/${ring.id}`} className="flex items-center gap-4 p-2 flex-grow-0 rounded-lg bg-white/5 hover:bg-white/10">
        <img className="w-12 h-12" src={ring.imageUrl} alt={ring.name} />
        <div className="flex-grow flex flex-col gap-1">
          <p className="text-xl underline underline-offset-4 decoration-blue-700">{ring.name}</p>
          <div className="flex justify-between italic font-light gap-2 items-center text-sm">
            {ring.requiredStats?.level && <p className="opacity-80 p-1 pl-0">Level {ring.requiredStats?.level}</p>}
            <div className="flex gap-2">
              {ring.unique && <p className="rounded-full bg-slate-800 px-3 tracking-wider text-sm opacity-80">Unique</p>}
              {ring.bindOnEquip && <p className="rounded-full bg-red-800 px-3 tracking-wider text-sm opacity-80">BoE</p>}
              {ring.bindOnPickup && <p className="rounded-full bg-red-800 px-3 tracking-wider text-sm opacity-80">BoP</p>}
              {ring.showsHealth && <p className="rounded-full bg-blue-600 px-3 tracking-wider text-sm opacity-80">Oracle</p>}
            </div>
          </div>
        </div>
      </Link>

      <div className="flex flex-col px-2 gap-3">
        {ring.availableClasses && (
          <div className="flex flex-wrap gap-1 text-slate-500 italic">
            <p>Usable by</p>
            {ring.availableClasses.map(ac => <p className="px-3 text-slate-300 bg-blue-500/20 rounded-full">{ac}</p>)}
          </div>
        )}
        {ring.description && <p className="flex-wrap">{ring.description}</p>}
        {ring.benefitStats && <div className="flex flex-col px-2 gap-3 flex-wrap">
          <StatsBlock statBlock={ring.benefitStats} title="Bonuses / Penalties" showIcons />
        </div>}
      </div>
    </div>
  );
}

export default Ring;
