import React from 'react'

export type ItemContainerProps = {
  className?: string;
}

const ItemContainer: React.FC<React.PropsWithChildren<ItemContainerProps>> = ({className = '', children}) => {
  return (
    <div className={`flex flex-col basis-full p-4 gap-3 max-w-xl rounded-lg border-2 text-xs ${className}`}>
      {children}
    </div>
  )
}

export default ItemContainer;
