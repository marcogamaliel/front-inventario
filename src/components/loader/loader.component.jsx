import React from 'react'

export default function Loader({ isLoading }) {
  return isLoading && <div className="green lighten-4 progress"><div className="green indeterminate" /></div>
}
