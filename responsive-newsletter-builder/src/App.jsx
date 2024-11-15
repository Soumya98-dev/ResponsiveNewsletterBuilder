import React from "react"
import Sidebar from './components/Sidebar.jsx'
import Canvas from './components/Canvas.jsx'
import "./App.css"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

function App(){
  return(
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <Sidebar/>
        <Canvas/>
      </div>
    </DndProvider>
  )
}

export default App