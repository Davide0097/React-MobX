// Overview - Store for the global state that manage the count of the state changes

// Import - Import from mobX
import { observable } from "mobx";

// Import - Import autorun from mobX
import { autorun } from "mobx";

// Const delcaration - Object containing the state for counting the changes
const projectState = observable(
  { totalChange: 0, globalChange: 0 }
);

// Autorun to log changes
autorun(() => {
  console.log(`Total change: ${projectState.totalChange}`);
  console.log(`Global change: ${projectState.globalChange}`);
});

// ADD 1 CHANGE TO THE TOTAL CHANGES COUNT
export const addChange = () => {
  projectState.totalChange += 1;
}

// ADD 1 CHANGE TO THE GLOBAL CHANGES COUNT
export const addGlobalChange = () => {
  projectState.globalChange += 1;
}

// RESET THE CHANGES COUNT
export const resetChanges = () => {
  projectState.totalChange = 0;
  projectState.globalChange = 0;
}

export default projectState;