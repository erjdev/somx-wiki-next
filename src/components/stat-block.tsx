import { SomStats } from "../../somdata/types/base-data";

export const StatsBlock = ({ title, statBlock }: { statBlock: SomStats, title?: string }) => {
  // Don't render anything if there are no stats
  if (!statBlock.health && !statBlock.mana && !statBlock.strength && !statBlock.defense && !statBlock.magic && !statBlock.speed)
    return null;
  

  return (
    <div className="flex flex-col p-4 gap-2">
      <div className="flex items-center gap-2">
        <h2 className="text-xl">{title ?? 'Stats'}</h2>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {statBlock.health && (
          <>
            <p>Health</p>
            <p>{statBlock.health}</p>
          </>
        )}
        {statBlock.mana && (
          <>
            <p>Mana</p>
            <p>{statBlock.mana}</p>
          </>
        )}
        {statBlock.strength && (
          <>
            <p>Strength</p>
            <p>{statBlock.strength}</p>
          </>
        )}
        {statBlock.defense && (
          <>
            <p>Defense</p>
            <p>{statBlock.defense}</p>
          </>
        )}
        {statBlock.magic && (
          <>
            <p>Magic</p>
            <p>{statBlock.magic}</p>
          </>
        )}
        {statBlock.speed && (
          <>
            <p>Speed</p>
            <p>{statBlock.speed}</p>
          </>
        )}
      </div>
    </div>
  )
}
