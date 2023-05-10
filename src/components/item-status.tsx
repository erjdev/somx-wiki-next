import React from 'react';

export const ItemStatusUnique = () =>
  <p className="rounded-full bg-slate-800 px-3 tracking-wider opacity-80">Unique</p>;

export const ItemStatusBindOnEquip = () =>
  <p className="rounded-full bg-red-800 px-3 tracking-wider opacity-80">BoE</p>;

export const ItemStatusBindOnPickup = () =>
  <p className="rounded-full bg-red-800 px-3 tracking-wider opacity-80">BoP</p>;

export const ItemStatusShowsHealth = () =>
  <p className="rounded-full bg-blue-600 px-3 tracking-wider opacity-80">Oracle</p>;

type ItemStatusProps = {
  unique?: boolean;
  bindOnEquip?: boolean;
  bindOnPickup?: boolean;
  showsHealth?: boolean;
}

const ItemStatus: React.FC<ItemStatusProps> = ({ unique, bindOnEquip, bindOnPickup, showsHealth }) => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1">
      {unique && <ItemStatusUnique />}
      {bindOnEquip && <ItemStatusBindOnEquip />}
      {bindOnPickup && <ItemStatusBindOnPickup />}
      {showsHealth && <ItemStatusShowsHealth />}
    </div>
  )
}

export default ItemStatus;
