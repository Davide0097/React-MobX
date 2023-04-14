// Overview - Component that render the state tracker section

// Import - Import for CSS file
import './stateTracker.css'

// Import - Import from global state
import projectState from '../../store/ProjectsState'

// Import - Import from mobX
import { observer } from 'mobx-react'

// Import - Function from global state
import { resetChanges } from '../../store/ProjectsState'

const StateTracker = observer(() => {
    return (
        <div className='stateTracker'>
            <div className='totalState'> <h1 > Total state changes:</h1>
                <h1>{projectState.totalChange}</h1>  </div>
            <h1> Changes from global editor:</h1>
            <h1>{projectState.globalChange}</h1>
            <button onClick={() => resetChanges()}>Reset the state count</button>
        </div>
    )
})

export default StateTracker 