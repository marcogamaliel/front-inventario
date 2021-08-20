import React, { useEffect, useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min'
import Navbar from './components/navbar/navbar.component'
import AppContext from './application/app-context/app-context'
import AppRouter from './views/router/router'

function App() {
  useEffect(() => {
    M.AutoInit()
  }, [])

  const [context, setContext] = useState({})

  return (
    <AppContext.Provider value={[context, setContext]}>
      <Navbar />
      <AppRouter />
    </AppContext.Provider>
  )
}

export default App;
