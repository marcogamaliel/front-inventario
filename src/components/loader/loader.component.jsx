import React from 'react'

export default function Loader({ isLoading }) {
  return isLoading && <div className="purple lighten-4 progress"><div className="purple lighten-1 indeterminate" /></div>
}
