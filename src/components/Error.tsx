import React from 'react'

const Error: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className={'error-color'}>
      {children}
    </div>
  )
}

export default Error
