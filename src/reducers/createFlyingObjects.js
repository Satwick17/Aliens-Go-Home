import {
  createInterval,
  flyingObjectsStarterPositions,
  flyingObjectsStarterYAxis,
  maxFlyingObjects,
} from "../utils/constants";

function createFlyingObjects(state) {
  if (!state.gameState.started) return state;

  const now = new Date().getTime();
  const { lastObjectCreatedAt, flyingObjects } = state.gameState;
  const createNewObject =
    now - lastObjectCreatedAt.getTime() > createInterval &&
    flyingObjects.length < maxFlyingObjects;

  if (!createNewObject) return state; 

  const id = new Date().getTime();
  const predefinedPosition = Math.floor(Math.random() * maxFlyingObjects);
  const flyingObjectPosition =
    flyingObjectsStarterPositions[predefinedPosition];
  const newFlyingObject = {
    position: {
      x: flyingObjectPosition,
      y: flyingObjectsStarterYAxis,
    },
    createdAt: new Date().getTime(),
    id,
  };

  return {
    ...state,
    gameState: {
      ...state.gameState,
      flyingObjects: [...state.gameState.flyingObjects, newFlyingObject],
      lastObjectCreatedAt: new Date(),
    },
  };
}

export default createFlyingObjects;
