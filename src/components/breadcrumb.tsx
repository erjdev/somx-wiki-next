import Link from 'next/link';
import React from 'react'

type Props = {
  categoryName: string;
  categoryId: string;
  itemName?: string;
  itemId?: string;
}

const BreadCrumb: React.FC<Props> = ({ categoryName, categoryId, itemName, itemId }) => {
  return (
    <div className="flex space-x-2 items-center">
      <Link href={`/${categoryId}`} className="underline-offset-2 decoration-blue-700 hover:underline">{categoryName}</Link>
      {itemId && <>
        <span className="text-xs select-none">&gt;</span>
        <Link href={`/${categoryId}/${itemId}`} className="underline-offset-2 decoration-blue-700 hover:underline">{itemName}</Link>
      </>}
    </div>
  )
}

export default BreadCrumb;
