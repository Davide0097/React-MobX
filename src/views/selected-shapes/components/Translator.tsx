// Overview - Component for translating the selected shapes

// Import - Function from the global store
import { moveElement } from '../../../store/ShapesState'

// Import - Global state
import globalState from '../../../store/ShapesState'

function Translator({ index }) {

    return (
        <div className='translator'>
            {globalState.length > 1 ?
                <>
                    {index > 0 ? <button onClick={() => moveElement("left", index)}>left</button> : <></>}
                    {index < 4 ? <button onClick={() => moveElement("right", index)}>right</button> : <></>}
                </> :
                <></>}

        </div>
    )
}

export default Translator