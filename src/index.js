import React from 'react'
import ReactDom from 'react-dom'
import  './index.css'
import App from './App'
import {AppProvider} from './context'

const MainComponent = () =>{
  return (
    <AppProvider>
      <App/>
      </AppProvider>
  )
}

ReactDom.render(<MainComponent/>, document.getElementById("root"))

