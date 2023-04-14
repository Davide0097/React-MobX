// Overview - Component responsable for rendering the Ball

// Import - Import from react
import { useState } from "react"

// Import - Import for editor component
import Editor from "../const/Editor";

// Import - Import from mobX
import { observer } from "mobx-react-lite";

// Import - Import for using the global state
import { addElement } from "../../../store/ShapesState";
import globalState from "../../../store/ShapesState";

// Interface - Declaring the interface for the props
export interface ShapeProps {
  color: 'blue' | 'red' | 'purple' | string;
  opacity: number;
  line: boolean;
  shape: string;
}

// Interface - Declaring the interface for the actions
export interface ShapeAction {
  setColor: (color: string) => void;
  setLine: (line: boolean) => void;
  setOpacity: any;
}

const Ball = observer(() => {

  // Inizializing state - State for the color, the line and the opacity of the figure, state for showing the editor
  const [color, setColor] = useState<string>('red');
  const [line, setLine] = useState<boolean>(true);
  const [opacity, setOpacity] = useState<number>(1)
  const [editor, setEditor] = useState<boolean>(false)

  const shape = 'ball'

  // CSS in JS for the figure
  const styles = {
    backgroundColor: color,
    opacity: opacity,
    width: '100px',
    height: '100px',
    borderRadius: '100px',
    margin: '10px',
  };

  // Function - Dispatching function to add the element to the global state
  const handleClick = () => {
    addElement({ color: color, line: line, opacity: opacity, shape: shape });
  };

  return (
    <>
      <div className="ball">
        <h1>Ball</h1>
        <div className='shape' style={styles}>
          {line && <div className="line"></div>}
        </div>

        {/* Showing the add element button only when figure are less than 5 */}
        {globalState.length < 5 ?
          (<>

            <button onClick={() => setEditor(!editor)}>Editor</button>
            <button className="addElement" onClick={handleClick}>add element</button>

            {/* If editor is selected */}
            {editor &&
              <Editor setColor={setColor} setLine={setLine} setOpacity={setOpacity} />}
          </>
          ) : <p>max element selected</p>}

      </div>
    </>
  )
})
export default Ball 