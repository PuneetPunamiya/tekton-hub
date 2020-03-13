import {FETCH_TASK_SUCCESS_DUMMY} from '../Actions/TaskActionType';

export interface ResData{
    Name : string,
    Description : string,
    Rating : number,
    Downloads : number,
    YAML : string
  }
// type obj = ResData[]
const initialState = {
  data: [],
};

const reducer = (state = initialState, action : any) => {
  switch (action.type) {
    case FETCH_TASK_SUCCESS_DUMMY:
      return {
        ...state,
        TaskDataDummy: action.payload,
      };
    default: return state;
  }
};

export default reducer;
