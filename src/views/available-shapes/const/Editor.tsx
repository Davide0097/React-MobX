// Overview - Component resposnable to render the editor for available shapes

// Import - Import for the TS Interface
import { ShapeAction } from "../components/Ball"

function Editor({ setColor, setLine, setOpacity }: ShapeAction) {

    return (
        <div className="editor">

            {/* color editor */}
            <div className="colorEditor">
                <p>Color:</p>
                <ul>
                    <button onClick={() => setColor("blue")}>blue</button>
                    <button onClick={() => setColor("purple")}>purple</button>
                    <button onClick={() => setColor("red")}>red</button>
                </ul>
            </div>

            {/* line editor */}
            <div className="lineEditor">
                <p>Line:</p>
                <button onClick={() => setLine(true)}>Yes</button>
                <button onClick={() => setLine(false)}>No</button>
            </div>

            {/* opacity editor */}
            <div className="opacityEditor">
                <p>Opacity:</p>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    className="m-1 ml-auto accent-emerald-600"
                    onChange={(e) =>
                        setOpacity(e.target.value)
                    }
                />
            </div>
        </div>
    )
}

export default Editor