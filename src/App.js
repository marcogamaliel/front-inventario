import React, { useEffect, useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min'
import Navbar from './components/navbar/navbar.component'
import AppContext from './application/app-context/app-context'
import AppRouter from './views/router/router'
import SideNav from './components/side-nav/side-nav.component'

function App() {
  useEffect(() => {
    M.AutoInit()
  }, [])

  const [context, setContext] = useState({})

  return (
    <AppContext.Provider value={[context, setContext]}>
      <Router>
        <Navbar />
        <SideNav />
        <main>
          <AppRouter />
        </main>
      </Router >
    </AppContext.Provider>
  )
}

export default App;
