// Overview - Component for editing the selected shapes

// Import - Import functions from the store
import { changeElementColor } from '../../../store/ShapesState'
import { changeElementOpacity } from '../../../store/ShapesState'
import { changeElementLine } from '../../../store/ShapesState'

export default function Editor({ index }) {

  return (

    // Color
    <div>
      <p>Color:</p>
      <ul>
        <button onClick={() => changeElementColor("blue", index)}>blue</button>
        <button onClick={() => changeElementColor("purple", index)}>purple</button>
        <button onClick={() => changeElementColor("red", index)}>red</button>
      </ul>

      {/* Line */}
      <div >
        <p>Line:</p>
        <button onClick={() => changeElementLine(true, index)}>Yes</button>
        <button onClick={() => changeElementLine(false, index)}>No</button>
      </div>

      {/* Opacity */}
      <div >
        <p>Opacity:</p>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          className="m-1 ml-auto accent-emerald-600"
          onChange={(e) =>
            changeElementOpacity(e.target.value, index)
          }
        />
      </div>
    </div>
  )
}
