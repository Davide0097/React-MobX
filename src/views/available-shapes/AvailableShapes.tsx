// Overview - Component responsable for rendering the available shapes

// Import - Import for components
import Ball from "./components/Ball"
import Square from "./components/Square"
import Arch from "./components/Arch"

// Import - Import for CSS
import './AvailableShapes.css'

// Import - Import for the state resposnable of the selected shapes
import globalState from "../../store/ShapesState"

// Import - Import from mobX
import { observer } from "mobx-react"

const AvailableShapes = observer(() => {

  return (
    <div className="availableShapes">
      <h1>Available Shapes</h1>
      <h1>{globalState.length}/5</h1>
      <div className="shapes">
        <Ball />
        <Square />
        <Arch />
      </div>
    </div>
  )
})

export default AvailableShapes