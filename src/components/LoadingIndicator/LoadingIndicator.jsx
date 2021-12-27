import React from 'react'

const LoadingIndicator = () => {
  return (
    <div>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <div className="font-semibold text-white">Loading...</div>
    </div>
  )
}

export default LoadingIndicator
