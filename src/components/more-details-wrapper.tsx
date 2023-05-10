import React from 'react'

type MoreDetailsWrapperProps = {

}

const MoreDetailsWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {children}
    </div>
  )
}

export default MoreDetailsWrapper;
