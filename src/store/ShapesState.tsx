// Overview - Store for the global state that manage the selected figures

// Import - Import from mobX
import { observable } from "mobx";

// Import - Type declartion
import { ShapeProps } from "../views/available-shapes/components/Ball";

// Import - Functions to interact with the second store
import { addChange } from "./ProjectsState";
import { addGlobalChange } from "./ProjectsState";

// Const delcaration - Object containing the selected figures
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

export const deleteElement = (index: number) => {
  globalState.splice(index, 1);
  addChange();
}

// @CHANGE THE SHAPE OF ALL THE ELEMENTS
export const changeAllTheShapes = (shape: string) => {
  globalState.map((element) => {
    element.shape = shape;
    return element;
  });
  addChange();
  addGlobalChange();
};

// @CHANGE THE COLOR OF ALL THE ELEMENTS
export const changeAllTheColors = (color: string) => {
  globalState.map((element) => {
    element.color = color;
    return element;
  });
  addChange();
  addGlobalChange();
};

// @CHANGE THE LINE OF ALL THE ELEMENTS
export const changeAllTheLines = (line: boolean) => {
  globalState.map((element) => {
    element.line = line;
    return element;
  });
  addChange();
  addGlobalChange();
};

// @CHANGE THE OPACITY OF ALL THE ELEMENTS
export const changeAllTheOpacity = (opacityValue: number) => {
  globalState.map((element) => {
    element.opacity = opacityValue;
    return element;
  });
  addChange();
  addGlobalChange();
};

// @MOVE THE ELEMENT
export const moveElement = (direction: "left" | "right", index: number) => {

  if (direction === "left") {
    // First elememnt cant go left
    if (index === 0) {
      console.log("first element cannot go left");
      return;
    }
    const element = globalState.splice(index, 1)[0];
    globalState.splice(index - 1, 0, element);
    addChange();
  }
  if (direction === "right") {
    // Last element cant go right
    if (index === globalState.length - 1) {
      console.log("last element cannot go right")
      return;
    }
    const element = globalState.splice(index, 1)[0];
    globalState.splice(index + 1, 0, element);
    addChange();
  }
}

// @CHANGE THE OPACITY OF 1 ELEMENT
export const changeElementOpacity = (opacityValue: number, index: number) => {
  globalState[index].opacity = opacityValue;
  addChange();
};

// @CHANGE THE LINE OF 1 ELEMENT
export const changeElementLine = (line: boolean, index: number) => {
  globalState[index].line = line;
  addChange();
};

// @CHANGE THE COLOR OF 1 ELEMENT
export const changeElementColor = (color: string, index: number) => {
  globalState[index].color = color;
  addChange();
};

export default globalState;