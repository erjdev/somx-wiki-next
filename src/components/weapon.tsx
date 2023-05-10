import React from 'react';
import { SomWeapon } from '../../somdata/types/item';
import { notFound } from 'next/navigation';
import EquippableItemDetails from './equippable-item-details';
import EquippableItemLink from './equippable-item-link';
import ItemContainer from './item-container';
import ItemStatus from './item-status';

const Weapon: React.FC<{ weapon: SomWeapon, showBenefits?: boolean }> = ({ weapon, showBenefits }) => {
  if (!weapon) {
    notFound();
  }

  return (
    <ItemContainer className="border-red-900">
      <EquippableItemLink
        href={`/weapons/${weapon.id}`}
        imageUrl={weapon.imageUrl}
        name={weapon.name}
        underlineAccentClass={"decoration-red-500"}
        level={weapon.requiredStats?.level}>
        {weapon.requiredStats?.strength && <p className="text-red-500">{weapon.requiredStats?.strength} Strength</p>}
        {weapon.durability && weapon.durability > 0 && <p className="text-gray-500">{weapon.durability} Durability</p>}
        {weapon.poisonPercent && weapon.poisonPercent > 0 && <p className="text-green-500">{weapon.poisonPercent}% Poison</p>}
        <ItemStatus {...weapon} />
      </EquippableItemLink>
      <EquippableItemDetails {...weapon} showBenefits={showBenefits} />
    </ItemContainer>
  )
}

export default Weapon;
