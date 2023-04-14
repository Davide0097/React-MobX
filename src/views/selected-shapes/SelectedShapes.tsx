// Overview - Component that render the selected shapes

// Import - Import from mobX
import { observer } from "mobx-react-lite";

// Import - Import for using the global state
import globalState from "../../store/ShapesState";
import { deleteElement } from "../../store/ShapesState";

// Import - Import for CSS
import './selectedShapes.css'

// Import - Import for components
import Editor from "./components/Editor";
import Translator from "./components/Translator";

// Import - Import from React
import { useState } from "react";

const SelectedShapes = observer(() => {

  const [editor, setEditor] = useState<boolean>(false)

  return (
    <>
      <div className="selectedShapes">
        <h1>Selected Shapes</h1>
        <h1>{globalState.length}/5</h1>
        <button onClick={() => setEditor(!editor)}>editor</button>

        <div className="selectedShapesGrid">
          {globalState.map((item, index: number) => {


            if (item.shape === "arch") {
              return (
                <div
                  style={{
                    backgroundColor: item.color,
                    opacity: item.opacity,
                    width: '100px',
                    height: '100px',
                    borderTopLeftRadius: '200px',
                    borderTopRightRadius: '200px',
                    margin: '15px',
                  }}
                  key={index}>
                  {item.line ? <div className="line"></div> : <div className="lineNo"></div>}
                  <Translator index={index} />
                  {editor && <Editor index={index} />}
                  <button onClick={() => deleteElement(index)}>Delete</button>
                </div>
              )


            } else if (item.shape === "square") {
              return (
                <div
                  style={{
                    backgroundColor: item.color,
                    opacity: item.opacity,
                    width: '100px',
                    height: '100px',
                    margin: '15px',
                  }}
                  key={index}>
                  {item.line ? <div className="line"></div> : <div className="lineNo"></div>}
                  <Translator index={index} />
                  {editor && <Editor index={index} />}
                  <button onClick={() => deleteElement(index)}>Delete</button>
                </div>
              )


            } else if (item.shape === "ball") {
              return (
                <div
                  style={{
                    backgroundColor: item.color,
                    opacity: item.opacity,
                    width: '100px',
                    height: '100px',
                    borderRadius: '100px',
                    margin: '15px',
                  }}
                  key={index}>
                  {item.line ? <div className="line"></div> : <div className="lineNo"></div>}
                  <Translator index={index} />
                  {editor && <Editor index={index} />}
                  <button onClick={() => deleteElement(index)}>Delete</button>
                </div>
              )
            }
          })}
        </div>
      </div>
    </>
  )
})

export default SelectedShapes

