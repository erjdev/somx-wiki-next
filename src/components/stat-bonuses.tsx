import { SomStats } from "../../somdata/types/base-data";

const StatIcon: React.FC<{positive: boolean, className?: string}> = ({ positive, className = '' }) => {
  if (!positive) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 h-6 ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 h-6 ${className}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export const StatBonuses = ({ statBlock }: { statBlock: SomStats }) => {
  // Don't render anything if there are no stats to show
  if (!statBlock.health && !statBlock.mana && !statBlock.strength && !statBlock.defense && !statBlock.magic && !statBlock.speed)
    return null;

  const positiveColorClass = "text-green-300";
  const negativeColorClass = "text-red-300";

  return (
    <div className="flex flex-col px-2 gap-2 max-w-xs mx-auto">
      <div className="flex items-center gap-2">
        <p className="text-md tracking-wide opacity-80">Bonuses / Penalties</p>
      </div>

      <div className="grid grid-cols-2 gap-1">
        {statBlock.health && (
          <>
            <p className={`flex items-center gap-4 ${statBlock.health > 0 ? positiveColorClass : negativeColorClass}`}>
              <StatIcon positive={statBlock.health > 0} />
              Health
            </p>
            <p className={`text-right ${statBlock.health > 0 ? positiveColorClass : negativeColorClass}`}>{statBlock.health}</p>
          </>
        )}
        {statBlock.mana && (
          <>
            <p className={`flex items-center gap-4 ${statBlock.mana > 0 ? positiveColorClass : negativeColorClass}`}>
              <StatIcon positive={statBlock.mana > 0} />
              Mana
            </p>
            <p className={`text-right ${statBlock.mana > 0 ? positiveColorClass : negativeColorClass}`}>{statBlock.mana}</p>
          </>
        )}
        {statBlock.strength && (
          <>
            <p className={`flex items-center gap-4 ${statBlock.strength > 0 ? positiveColorClass : negativeColorClass}`}>
              <StatIcon positive={statBlock.strength > 0} />
              Strength
            </p>
            <p className={`text-right ${statBlock.strength > 0 ? positiveColorClass : negativeColorClass}`}>{statBlock.strength}</p>
          </>
        )}
        {statBlock.defense && (
          <>
            <p className={`flex items-center gap-4 ${statBlock.defense > 0 ? positiveColorClass : negativeColorClass}`}>
              <StatIcon positive={statBlock.defense > 0} />
              Defense
            </p>
            <p className={`text-right ${statBlock.defense > 0 ? positiveColorClass : negativeColorClass}`}>{statBlock.defense}</p>
          </>
        )}
        {statBlock.magic && (
          <>
            <p className={`flex items-center gap-4 ${statBlock.magic > 0 ? positiveColorClass : negativeColorClass}`}>
              <StatIcon positive={statBlock.magic > 0} />
              Magic
            </p>
            <p className={`text-right ${statBlock.magic > 0 ? positiveColorClass : negativeColorClass}`}>{statBlock.magic}</p>
          </>
        )}
        {statBlock.speed && (
          <>
            <p className={`flex items-center gap-4 ${statBlock.speed > 0 ? positiveColorClass : negativeColorClass}`}>
              <StatIcon positive={statBlock.speed > 0} />
              Speed
            </p>
            <p className={`text-right ${statBlock.speed > 0 ? positiveColorClass : negativeColorClass}`}>{statBlock.speed}</p>
          </>
        )}
      </div>
    </div>
  )
}
