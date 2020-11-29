import React from 'react'

const Error: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div style={{color: '#ff6347'}}>
      {children}
    </div>
  )
}

export default Error
