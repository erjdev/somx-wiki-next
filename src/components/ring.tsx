import React from 'react';
import { SomRing } from '../../somdata/types/item';
import { StatsBlock } from './stat-block';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const Ring: React.FC<{ ring: SomRing }> = ({ ring }) => {
  if (!ring) notFound();

  return (
    <div className="flex flex-col p-4 gap-3 max-w-xl rounded-lg">
      <Link href={`/rings/${ring.id}`} className="flex items-center gap-4 px-2 flex-grow-0 rounded-lg border-x-4 border-transparent group hover:border-blue-700">
        <img className="w-12 h-12" src={ring.imageUrl} alt={ring.name} />
        <div className="flex flex-col gap-1">
          <p className="text-xl underline underline-offset-4 decoration-blue-700">{ring.name}</p>
          <div className="flex justify-between italic font-light gap-2 items-center text-sm">
            {ring.requiredStats?.level && <p className="opacity-80 p-1 pl-0">Level {ring.requiredStats?.level}</p>}
            {ring.unique && <p className="rounded-full bg-slate-800 px-3 tracking-wider text-sm opacity-80">Unique</p>}
          </div>
        </div>
      </Link>

      <div className="flex flex-col px-2 gap-3">
        {ring.description && <p className="flex-wrap">{ring.description}</p>}
        {ring.availableClasses && <p className="flex-wrap">{ring.availableClasses}</p>}
        {ring.benefitStats && <div className="flex flex-col px-2 gap-3 flex-wrap">
          <StatsBlock statBlock={ring.benefitStats} title="Bonuses / Penalties" showIcons />
        </div>}
      </div>
    </div>
  );
}

export default Ring;
