import { ADD_PROJECT_TO_STORE } from "../types";

const ProjectReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PROJECT_TO_STORE:
      return action.payload;
    default:
      return state;
  }
};

export default ProjectReducer;
