// overview - Component that render the globalò editor section

// Import - Import for store functions
import { deleteAllElements } from '../../store/ShapesState'
import { changeAllTheShapes } from '../../store/ShapesState';
import { changeAllTheColors } from '../../store/ShapesState';
import { changeAllTheLines } from '../../store/ShapesState';
import { changeAllTheOpacity } from '../../store/ShapesState';

// Import - Import for CSS
import './GlobalEditor.css'

function GlobalEditor() {

  return (
    <div className='globalEditor'>
      <h1>Global editor</h1>

      {/* Shapes */}
      <div>
        <p>Change all the shapes:</p>
        <button onClick={() => changeAllTheShapes("ball")}>ball</button>
        <button onClick={() => changeAllTheShapes("square")}>square</button>
        <button onClick={() => changeAllTheShapes("arch")}>arch</button>
      </div>

      {/* Colors */}
      <div>
        <p>Change all the colors:</p>
        <button onClick={() => changeAllTheColors("red")}>red</button>
        <button onClick={() => changeAllTheColors("purple")}>purple</button>
        <button onClick={() => changeAllTheColors("blue")}>blue</button>
      </div>

      {/* Lines */}
      <div>
        <p>Change all the lines:</p>
        <button onClick={() => changeAllTheLines(true)}>line all</button>
        <button onClick={() => changeAllTheLines(false)}>no line</button>
      </div>

      {/* Opacity */}
      <div>
        <p>Change all the opacity:</p>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          className="m-1 ml-auto accent-emerald-600"
          onChange={(e) =>
            changeAllTheOpacity(e.target.value)
          }
        />
      </div>

      <div>
        <button className="deleteButton" onClick={() => deleteAllElements()}>delete all</button>
      </div>
    </div>
  )
}

export default GlobalEditor