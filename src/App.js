import React from 'react'
import './style.css'
import './App.css'
import Carlist from './components/carlist'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


function App() {
  return (
    <div className="App">
      <AppBar className="appBar" position="static">
        <Toolbar>
            <Typography variant="h6">
              AWESOME CARSHOP
            </Typography>
        </Toolbar>
      </AppBar>

      <Carlist />
      
    </div>
  )
}

export default App
