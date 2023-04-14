Introduction - Why I Made This App

I created this app with the aim of becoming more confident in using MobX, 
a popular state management library. While there are numerous online resources 
available for MobX best practices and usage suggestions, I found that the official 
documentation on MobX with functional components was limited. Most of the examples 
in the official documentation were based on class components and lifecycle methods, 
which may not be as relevant for modern React development. As a result, I decided to 
publish and comment on this codebase to share my knowledge on how to effectively use 
MobX with functional components in a React application.


Technologies Used

MobX: A state management library for React
React: A popular JavaScript library for building user interfaces
TypeScript: A statically typed superset of JavaScript
Vite: A fast build tool and development server


Prerequisites

Node.js and npm installed on your machine


Installation

- Clone the repository
- Install dependencies: npm install
- Start the development server: npm run dev


Architecture - a rapid look

For my app, I decided to follow a modular approach and split my code into different folders
 based on the UI sections. In the "Views" folder, I have four sub-folders, each responsible 
 for containing the components related to a specific part of the UI. These sub-folders are:

"available-shapes": Contains the code for the section that displays the available shapes.
"selected-shapes": Contains the code for the section that displays the selected shapes.
"global-editor": Contains the code for the global editor section.
"state-tracker": Contains the code for the state tracker section.
...
Each of these sub-folders contains a component responsible for rendering that specific section, 
along with another folder called "components" that contains components that are rendered within that section.

In addition, I have also created another folder called "store" which houses our store, 
serving as the single source of truth for managing the state of the application.


MobX usage

Observable
Following the official documentation's suggestion, I wrapped the global state in the "store" 
folder with the MobX "observable" decorator, enabling automatic reactivity. 
In simple terms, wrapping the global state in the "store" folder with the MobX "observable" 
decorator means that you marked the global state as something that can be observed for changes. 
This allows MobX to automatically detect and respond to changes in the state, triggering reactivity in your app.

Think of it like placing a sensor on an object that can detect when the object changes. Once the sensor is in place,
it can automatically notify other parts of your app whenever the object changes, without you having to manually check 
for changes yourself. Similarly, by using the MobX "observable" decorator on your global state, you enable MobX to 
automatically detect changes to that state and automatically update any components that rely on that state.
This makes it easier to keep your app in sync and ensure that the UI always reflects the current state of your data.

[import ....]

const globalState = observable(
  [
    { color: "red", line: false, opacity: 1, shape: "arch" },
  ]);

// @ADD ONE ELEMENT
export const addElement = ({ color, line, opacity, shape }: ShapeProps) => {
  globalState.push({ color, line, opacity, shape });
  console.log(globalState);
  addChange();
};

// @DELETE ALL THE ELEMENTS
export const deleteAllElements = () => {
  globalState.clear();
  console.log(globalState);
  addChange();
  addGlobalChange();
};


Actions
The "store" folder also contains functions for editing the state, which are invoked by components that dispatch actions to modify the state. 

Observer
 For components that directly access and use the values of the global state, 
 I used the MobX "observer" decorator to ensure automatic re-rendering of the components whenever the state changes. 
An example is the stateTracker.tsx that read the value of the second store and counts how many times the state changed

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


Contacts

If you have any questions or feedback, please contact me at davidefxfx@gmail.com
Visit www.bricks-platform.com




