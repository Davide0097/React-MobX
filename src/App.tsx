import AvailableShapes from "./views/available-shapes/AvailableShapes"
import GlobalEditor from "./views/global-editor/GlobalEditor"
import SelectedShapes from "./views/selected-shapes/SelectedShapes"
import StateTracker from "./views/state-tracker/StateTracker"

function App() {
  return (
    <div className="App">
      <AvailableShapes />
      <SelectedShapes />
      <GlobalEditor />
      <StateTracker/>
    </div>
  )
}

export default App
