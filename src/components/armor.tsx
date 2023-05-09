import React from 'react';
import { SomArmor } from '../../somdata/types/item';
import { notFound } from 'next/navigation';
import EquippableItemDetails from './equippable-item-details';
import EquippableItemLink from './equippable-item-link';
import ItemContainer from './item-container';

const Armor: React.FC<{ armor: SomArmor, showBenefits?: boolean }> = ({ armor, showBenefits = true }) => {
  if (!armor) {
    notFound();
  }

  return (
    <ItemContainer className="border-slate-800">
      <EquippableItemLink
        href={`/armor/${armor.id}`}
        imageUrl={armor.imageUrl}
        name={armor.name}
        underlineAccentClass={"decoration-slate-500"}
        level={armor.requiredStats?.level}
      >
        {armor.requiredStats?.defense && <p className="text-slate-300 opacity-80">{armor.requiredStats?.defense} Defense</p>}
        {armor.requiredStats?.magic && armor.requiredStats?.magic > 0 && <p className="text-blue-700 opacity-80">{armor.requiredStats?.magic} Magic</p>}
        {armor.durability && armor.durability > 0 && <p className="text-gray-500">{armor.durability} Durability</p>}
      </EquippableItemLink>

      <EquippableItemDetails {...armor} showBenefits={showBenefits} />
    </ItemContainer>
  )
}

export default Armor;
