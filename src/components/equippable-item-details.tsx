import React from 'react';
import { SomEquippableItemBase } from '../../somdata/types/item';
import { StatBonuses } from './stat-bonuses';

const EquippableItemDetails: React.FC<SomEquippableItemBase & {
  showBenefits?: boolean,
}> = ({
  availableClasses,
  description,
  benefitStats,
  showBenefits = true,
}) => {
  return (
    <div className="flex flex-col px-2 gap-3">
      {availableClasses && (
        <div className="flex flex-wrap gap-1 text-slate-500">
          <p>Usable by</p>
          {availableClasses.map(ac => <p key={ac} className="px-3 text-slate-300 bg-white/10 rounded-full">{ac}</p>)}
        </div>
      )}
      {description && <p className="flex-wrap">{description}</p>}
      {showBenefits && benefitStats && <div className="px-2"><StatBonuses statBlock={benefitStats} /></div>}
    </div>
  )
}

export default EquippableItemDetails;
