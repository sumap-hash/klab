import ProjectReducer from "./projects";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  PROJECTS: ProjectReducer
});

export default rootReducer;
